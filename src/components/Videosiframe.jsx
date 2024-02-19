import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function Videosiframe({ iframe }) {
  const [perPage, setPerPage] = useState(iframe.length >= 2 && window.innerWidth >= 767 ? 2 : 1);

  const handleWidthPerPage = () => {
    return setPerPage(() => {
      return iframe.length >= 2 && window.innerWidth >= 767 ? 2 : 1;
    });
  };

  useEffect(() => {
    handleWidthPerPage();

    window.addEventListener("resize", handleWidthPerPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iframe.length]);

  return (
    iframe.length && (
      <section className="videos-iframe">
        <div className="container">
          <h1 className="title">
            Videos
            <span>
              {iframe.length}

              <FaChevronRight style={{ color: "#fff" }} size={30} />
            </span>
          </h1>

          <Splide
            options={{
              pagination: false,
              gap: "20px",
              perPage: perPage,
            }}
          >
            {/*  */}

            {iframe.map((obj) => {
              return (
                <SplideSlide
                  key={obj.id}
                  className={`SplideSlide ${perPage === 2 ? "many-videos" : "one-video"}`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${obj.key}`}
                    title={obj.name}
                    allowFullScreen
                  ></iframe>
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

export default Videosiframe;
