import {createAsyncThunk} from '@reduxjs/toolkit';

const CLIENT_ID: string = 'D7dS1FAqM2BtqObfD3TlLC_s7l9yfyb2kVyJWvzTH2M';

const getPhotosUnsplash = async (count: string) => {
  const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=${count}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getPhotos = createAsyncThunk(
  'photos',
  async (count: string, thunkApi) => {
    try {
      return await getPhotosUnsplash(count);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
