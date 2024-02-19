function ListGenres({ genresList, setGenres, genres }) {
  return (
    <section className="list-genres">
      <div className="container">
        <select value={genres.id} onChange={(e) => setGenres({ id: +e.target.value, page: 1 })}>
          {genresList[0] &&
            genresList.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.name}
              </option>
            ))}
        </select>
      </div>
    </section>
  );
}

export default ListGenres;
