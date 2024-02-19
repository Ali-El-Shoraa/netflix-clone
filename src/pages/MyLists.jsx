import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
// import AllVideos from "../components/AllVideos";

function MyLists() {
  const [details, setDetails] = useState();

  const savedDetails = JSON.parse(localStorage.getItem("savedDetails")) || [];

  const notAvailable =
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";

  return (
    // <AllVideos movies={savedDetails} />
    savedDetails && (
      <>
        <section className="my-lists">
          <div className="container">
            {savedDetails &&
              savedDetails.map((obj) => {
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

export default MyLists;
