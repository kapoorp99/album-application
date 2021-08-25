/* eslint-disable */
import { useEffect } from "react";
import Home from "./components/Home";
import { useStyles } from "./globalStyles";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from './redux/reducers/albums'
import { fetchPhotos } from './redux/reducers/photos'

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let { albums, photos } = useSelector(state => state)
  useEffect(() => {
    dispatch(fetchAlbums())
    dispatch(fetchPhotos())
  }, [])
  return (
    <div className={classes.app}>
      {albums.loading && photos.loading ? ("Loading...") :
        (
          <Home albums={albums.albums.slice(0, 5)} photos={photos.photos} />
        )}
    </div>
  );
}

export default App;
