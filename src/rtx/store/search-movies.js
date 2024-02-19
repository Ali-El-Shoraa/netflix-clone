import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//

export const fetchSearchMovies = createAsyncThunk(
  "search/fetchSearchMovies",
  async (qurySearch) => {
    const { name, page } = qurySearch;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&page=${page}&include_adult=false&api_key=cfe475d7e19e2c7127ef38dbd1d34f41`
    );
    const data = await res.json();
    return data;
  }
);

export const SearchMovies = createSlice({
  name: "search",
  initialState: [],

  extraReducers: (builder) => {
    builder.addCase(fetchSearchMovies.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default SearchMovies.reducer;
