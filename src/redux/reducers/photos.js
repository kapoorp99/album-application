import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PhotoSlice = createSlice({
  name: 'photos',
  initialState: {
    loading: false,
    photos: [],
  },
  reducers: {
    photosLoading(state, action) {
      if (state.loading === false) {
        state.loading = true
      }
    },
    photosReceived(state, action) {
      if (state.loading === true) {
        state.loading = false
        state.photos = action.payload
      }
    }
  }
})

const { photosLoading, photosReceived } = PhotoSlice.actions;

export const fetchPhotos = () => async dispatch => {
  dispatch(photosLoading());
  const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
  dispatch(photosReceived(response.data));
}

export default PhotoSlice.reducer;