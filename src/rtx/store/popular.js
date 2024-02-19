import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// https://api.themoviedb.org/3/movie/popular

export const fetchPopular = createAsyncThunk("popular/fetchPopular", async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=cfe475d7e19e2c7127ef38dbd1d34f41"
  );
  const data = await res.json();

  return data.results;
});

export const PopularSlice = createSlice({
  name: "popular",
  initialState: [],

  extraReducers: (builder) => {
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default PopularSlice.reducer;
