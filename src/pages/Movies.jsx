import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllOrGenresMovies } from "../rtx/store/all-genres-movie";
import { fetchListGenres } from "../rtx/store/list-genres";

import ListGenres from "../components/ListGenres";
import AllVideos from "../components/AllVideos";
import ReactPaginate from "react-paginate";
import SearchBar from "../components/SearchBar";
import { fetchSearchMovies } from "../rtx/store/search-movies";
import { useLocation } from "react-router-dom";

function Movies() {
  const location = useLocation();

  const [genres, setGenres] = useState({ id: 28, page: 0 || 1 });
  const [qurySearch, setQurySearch] = useState({ name: "", page: 0 || 1 });

  const pageNumberGenres = ({ selected }) => {
    setGenres({ ...genres, page: selected + 1 });
  };

  const pageNumberSearch = ({ selected }) => {
    setQurySearch({ ...qurySearch, page: selected + 1 });
  };

  const dispatch = useDispatch();

  const genresList = useSelector((state) => state.genresList);
  const movies = useSelector((state) => state.movies);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchAllOrGenresMovies(genres));
    dispatch(fetchListGenres());

    dispatch(fetchSearchMovies(qurySearch));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, genres, qurySearch]);

  return (
    <>
      <SearchBar setQurySearch={setQurySearch} qurySearch={qurySearch} />

      {qurySearch.name ? (
        <>
          <AllVideos movies={search} />

          <ReactPaginate
            previousLabel={"Prev"}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={pageNumberSearch}
            pageCount={search.total_pages >= 500 ? 500 : search.total_pages}
            activeClassName="red"
            className="paginate"
          />
        </>
      ) : (
        <>
          <ListGenres genresList={genresList} setGenres={setGenres} genres={genres} />

          <AllVideos movies={movies} />

          <ReactPaginate
            previousLabel={"Prev"}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={pageNumberGenres}
            pageCount={movies.total_pages >= 500 ? 500 : movies.total_pages}
            activeClassName="red"
            className="paginate"
          />
        </>
      )}
    </>
  );
}

export default Movies;
