import { Link } from "react-router-dom";
import Popup from "./Popup";
import { useState } from "react";

function MoviesVideos({ movies }) {
  const [details, setDetails] = useState();

  const notAvailable =
    "	https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";
  return (
    movies.results && (
      <>
        <section className="movies-videos">
          <div className="container">
            {movies.results &&
              movies.results.map((obj) => {
                return (
                  <div className="card" key={obj.id}>
                    <Link to={`/details/${obj.id}`}>
                      <img
                        src={
                          obj.poster_path
                            ? `https://image.tmdb.org/t/p/w500${obj.poster_path}`
                            : notAvailable
                        }
                        alt=""
                      />
                    </Link>
                    {/* the style in App.scss */}
                    <button className="btn-details" onClick={() => setDetails(obj)}>
                      Details
                    </button>
                  </div>
                );
              })}

            {/* <ReactPaginate /> */}
          </div>
        </section>
        <Popup details={details} setDetails={setDetails} />
      </>
    )
  );
}

export default MoviesVideos;
