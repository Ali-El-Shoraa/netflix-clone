import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function Photos({ photos }) {
  const [perPage, setPerPage] = useState();

  const notAvailable =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/130px-Noimage.svg.png";

  const handleWidthPerPage = () => {
    return setPerPage(() => {
      return photos.length >= 2 && window.innerWidth >= 767 ? 2 : 1;
    });
  };
  useEffect(() => {
    handleWidthPerPage();

    window.addEventListener("resize", handleWidthPerPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos.length]);
  return (
    photos.length && (
      <section className="photos">
        <div className="container">
          <h1 className="title">
            Photos
            <span>
              {photos.length}

              <FaChevronRight style={{ color: "#fff" }} size={30} />
            </span>
          </h1>

          <Splide
            options={{
              pagination: false,
              gap: "20px",
              perPage: perPage, //perPage,
            }}
          >
            {/*  */}

            {photos.map((obj, indx) => {
              return (
                <SplideSlide
                  key={indx}
                  // className={`SplideSlide ${perPage === 2 ? "many-videos" : "one-video"}`}
                >
                  <div className="card">
                    <img
                      src={
                        obj.file_path
                          ? `https://image.tmdb.org/t/p/w500${obj.file_path}`
                          : notAvailable
                      }
                      alt=""
                    />
                  </div>
                </SplideSlide>
              );
            })}

            {/*  */}
          </Splide>
        </div>
      </section>
    )
  );
}

export default Photos;
