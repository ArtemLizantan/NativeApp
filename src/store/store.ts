import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {photoSlice} from './photos/photos.slice';

const rootReducer = combineReducers({
  photos: photoSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
