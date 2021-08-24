import { configureStore } from '@reduxjs/toolkit'
import albumsReducer from './reducers/albums'
import photosReducer from './reducers/photos'

const store = configureStore({
  reducer: {
    photos: photosReducer,
    albums: albumsReducer,
  },
});

export default store