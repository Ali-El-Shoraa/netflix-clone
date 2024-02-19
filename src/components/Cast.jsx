import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

function Cast({ cast }) {
  const notAvailable =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/130px-Noimage.svg.png";

  return (
    cast.length && (
      <section className="cast">
        <div className="container">
          {/* <Link></Link> */}
          <h1 className="title">
            Top Cast
            <span>
              {cast.length}

              <FaChevronRight style={{ color: "#fff" }} size={30} />
            </span>
          </h1>

          <div className="content-cast">
            {cast.slice(0, 10).map((obj) => {
              return (
                <div className="card-cast" key={obj.id}>
                  <div className="img">
                    <img
                      src={
                        obj.profile_path
                          ? `https://image.tmdb.org/t/p/w500${obj.profile_path}`
                          : notAvailable
                      }
                      alt=""
                    />
                  </div>

                  <div className="text">
                    <h3 className="name">{obj.name}</h3>
                    <span className="character">{obj.character}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
  );
}

export default Cast;
