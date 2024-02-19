import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//

export const fetchDetails = createAsyncThunk("details/fetchDetails", async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=cfe475d7e19e2c7127ef38dbd1d34f41`
  );
  const data = await res.json();

  return data;
});

export const DetailsData = createSlice({
  name: "details",
  initialState: {},

  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default DetailsData.reducer;
