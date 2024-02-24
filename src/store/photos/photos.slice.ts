import {getPhotos} from './photos.action';
import {createSlice} from '@reduxjs/toolkit';

export const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    isLoading: false,
    error: {},
    photos: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPhotos.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    });
    builder.addCase(getPhotos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.photos = [];
    });
  },
});
