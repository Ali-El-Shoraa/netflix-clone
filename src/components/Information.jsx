function Information({ details }) {
  const notAvailable =
    "	https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";
  return (
    details && (
      <section className="details">
        <img
          className="backdrop-path"
          src={
            details.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${details.backdrop_path}`
              : notAvailable
          }
          alt=""
        />
        <div className="layout"></div>

        <div className="container">
          <div className="content">
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

            <div className="text">
              <h1 className="title">{details.title}</h1>
              <div className="genres">
                Genres:
                {details.genres &&
                  details.genres.map((genre) => {
                    return <span key={genre.id}> /{genre.name}</span>;
                  })}
              </div>

              <div className="date">
                Date: <span> {details.release_date}</span>
              </div>
              <p className="overview">Overview: {details.overview}</p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Information;
