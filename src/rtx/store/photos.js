import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=cfe475d7e19e2c7127ef38dbd1d34f41`
  );
  const data = await res.json();
  return data.backdrops;
});

export const Photos = createSlice({
  name: "photos",
  initialState: [],

  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export default Photos.reducer;
