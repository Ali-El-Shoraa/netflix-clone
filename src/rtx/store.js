import { configureStore } from "@reduxjs/toolkit";
import ListGenresSlice from "./store/list-genres";
import TopRatedSlice from "./store/top-rated";
import NowPlayingSlice from "./store/now-playing";
import PopularSlice from "./store/popular";
import Upcoming from "./store/upcoming";
import DetailsData from "./store/details";
import MovieIframe from "./store/videos-iframe";
import Photos from "./store/photos";
import Cast from "./store/cast";
import Similar from "./store/similar";
import AllOrGenresMovies from "./store/all-genres-movie";
import SearchMovies from "./store/search-movies";

export const store = configureStore({
  reducer: {
    genresList: ListGenresSlice,
    topRated: TopRatedSlice,
    nowplaying: NowPlayingSlice,
    popular: PopularSlice,
    upcoming: Upcoming,
    details: DetailsData,
    iframe: MovieIframe,
    photos: Photos,
    cast: Cast,
    similar: Similar,
    movies: AllOrGenresMovies,
    search: SearchMovies,
    // ****************************************************************
  },
});
