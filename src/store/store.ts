import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {photoSlice} from './photos/photos.slice';

const rootReducer = combineReducers({
  photos: photoSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
