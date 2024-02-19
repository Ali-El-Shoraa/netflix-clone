import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// https://api.themoviedb.org/3/movie/now_playing?api_key=cfe475d7e19e2c7127ef38dbd1d34f41

export const fetchNowPlaying = createAsyncThunk("nowPlaying/fetchNowPlaying", async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=cfe475d7e19e2c7127ef38dbd1d34f41"
  );
  const data = await res.json();

  return data.results;
});

export const NowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState: [],

  extraReducers: (builder) => {
    builder.addCase(fetchNowPlaying.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default NowPlayingSlice.reducer;
