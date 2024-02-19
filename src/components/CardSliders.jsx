import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";

// data.length >= 2 && window.innerWidth >= 767 ? 2 : 1

function CardSliders({ title, data }) {
  const [details, setDetails] = useState();
  const [perPage, setPerPage] = useState();

  const notAvailable =
    "	https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";

  const handleWidthPerPage = () => {
    if (window.innerWidth >= 1024) {
      return setPerPage(5);
    } else if (window.innerWidth <= 599) {
      return setPerPage(2);
    } else if (window.innerWidth <= 1023) {
      return setPerPage(3);
    }
  };
  useEffect(() => {
    handleWidthPerPage();

    window.addEventListener("resize", handleWidthPerPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);

  return (
    title &&
    data.length && (
      <>
        <div className="slider">
          <h3 className="title">{title}</h3>
          <Splide options={{ pagination: false, gap: "20px", perPage: perPage }}>
            {data.map((obj) => (
              <SplideSlide key={obj.id}>
                {/* ************************************************* */}

                <div className="card">
                  <Link to={`/details/${obj.id}`}>
                    <img
                      src={
                        obj.poster_path
                          ? `https://image.tmdb.org/t/p/w500${obj.poster_path}`
                          : notAvailable
                      }
                      alt={obj.title}
                    />
                  </Link>
                  <button className="btn-details" onClick={() => setDetails(obj)}>
                    Details
                  </button>
                </div>

                {/* ************************************************* */}
              </SplideSlide>
            ))}
          </Splide>
        </div>
        {/* ************************************ */}
        <Popup details={details} setDetails={setDetails} />
      </>
    )
  );
}

export default CardSliders;
