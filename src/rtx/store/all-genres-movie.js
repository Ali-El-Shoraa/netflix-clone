import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllOrGenresMovies = createAsyncThunk("allMovies/fetchAllMovies", async (obj) => {
  const { id, page } = obj;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${id}&page=${+page}&api_key=cfe475d7e19e2c7127ef38dbd1d34f41`
  );
  const data = await res.json();

  return data;
});

const AllOrGenresMovies = createSlice({
  name: "allMovies",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrGenresMovies.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default AllOrGenresMovies.reducer;
