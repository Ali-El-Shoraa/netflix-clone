import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//

export const fetchCast = createAsyncThunk("cast/fetchCast", async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cfe475d7e19e2c7127ef38dbd1d34f41`
  );
  const data = await res.json();
  return data.cast;
});

export const Cast = createSlice({
  name: "cast",
  initialState: [],

  extraReducers: (builder) => {
    builder.addCase(fetchCast.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default Cast.reducer;
