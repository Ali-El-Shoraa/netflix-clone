import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTopRated = createAsyncThunk("topRated/fetchTopRated", async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=cfe475d7e19e2c7127ef38dbd1d34f41"
  );
  const data = await res.json();

  return data.results;
});

const TopRatedSlice = createSlice({
  name: "topRated",
  initialState: [],

  extraReducers: (builder) => {
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default TopRatedSlice.reducer;
