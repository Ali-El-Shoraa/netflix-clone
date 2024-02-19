import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const fetchListGenres = createAsyncThunk("genres/fetchListGenres", async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=cfe475d7e19e2c7127ef38dbd1d34f41&language=en`
  );
  const data = await res.json();
  return data.genres;
});

const ListGenresSlice = createSlice({
  name: "genres",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchListGenres.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default ListGenresSlice.reducer;
