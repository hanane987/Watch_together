import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './slices/playlistSlice';
import roomReducer from './slices/roomSlice';

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    room: roomReducer,
  },
});
