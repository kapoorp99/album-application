import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const AlbumSlice = createSlice({
  name: 'albums',
  initialState: {
      loading: false,
      albums: [],
  },
  reducers: {
      albumsLoading(state, action) {
          if(state.loading === false) {
              state.loading = true
          }
      },
      albumsReceived(state, action) {
          if(state.loading === true) {
              state.loading = false
              state.albums = action.payload
          }
      }
  }
})

const {albumsLoading,albumsReceived} = AlbumSlice.actions;

export const fetchAlbums = () => async dispatch => {
  dispatch(albumsLoading());
  const response = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
  dispatch(albumsReceived(response.data));
}

export default AlbumSlice.reducer;