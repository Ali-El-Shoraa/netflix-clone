import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//

export const fetchSimilar = createAsyncThunk("similar/fetchSimilar", async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=cfe475d7e19e2c7127ef38dbd1d34f41`
  );
  const data = await res.json();
  return data.results;
});

export const Similar = createSlice({
  name: "similar",
  initialState: [],

  extraReducers: (builder) => {
    builder.addCase(fetchSimilar.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default Similar.reducer;
