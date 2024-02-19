import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//

export const fetchUpcoming = createAsyncThunk("upcoming/fetchUpcoming", async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=cfe475d7e19e2c7127ef38dbd1d34f41"
  );
  const data = await res.json();

  return data.results;
});

export const Upcoming = createSlice({
  name: "upcoming",
  initialState: [],

  extraReducers: (builder) => {
    builder.addCase(fetchUpcoming.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default Upcoming.reducer;
