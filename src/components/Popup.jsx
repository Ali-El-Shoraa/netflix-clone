import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

// **********************************************************

function Popup({ details, setDetails }) {
  const notAvailable =
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savedDetails = JSON.parse(localStorage.getItem("savedDetails")) || [];

  const handleSaveToLocalStorage = () => {
    //
    if (!savedDetails.find((obj) => obj.id === details.id)) {
      savedDetails.push(details);
      localStorage.setItem("savedDetails", JSON.stringify(savedDetails));

      setDetails(null);
    }
  };

  // **********************************************************

  const handleRemovieToLocalStorage = () => {
    const rem = savedDetails
      .slice(0, savedDetails.indexOf(savedDetails.find((item) => item.id === details.id)))
      .concat(
        savedDetails.slice(
          savedDetails.indexOf(savedDetails.find((item) => item.id === details.id)) + 1
        )
      );
    localStorage.setItem("savedDetails", JSON.stringify(rem));

    setDetails(null);
  };

  // **********************************************************

  const SaveAndRemovie = () => {
    if (!savedDetails.find((obj) => obj.id === details.id)) {
      handleSaveToLocalStorage();
    } else {
      handleRemovieToLocalStorage();
    }
  };

  // **********************************************************
  return (
    details && (
      <section className="popup">
        <div className="container">
          <div className="poster-text">
            {/*  */}
            <div className="poster">
              <img
                src={
                  details.poster_path
                    ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                    : notAvailable
                }
                alt=""
              />
            </div>

            {/* ********************************************* */}
            <div className="text">
              <h1 className="title">{details.title}</h1>
              <div className="date">
                <span> {details.release_date}</span>
              </div>
            </div>
          </div>
          <p className="overview">{details.overview}</p>
          <button onClick={() => setDetails(null)} className="btn-close">
            <IoClose size={40} />
          </button>

          {/* ********************************************* */}

          <div className="btns">
            <button className="more-details">
              <Link to={`/details/${details.id}`}>More Details</Link>
            </button>
            <button onClick={SaveAndRemovie} className="btn-heart-save">
              {!savedDetails.find((obj) => obj.id === details.id) ? (
                <FaRegHeart size={26} color="red" />
              ) : (
                <FaHeart size={26} color="red" />
              )}
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default Popup;
