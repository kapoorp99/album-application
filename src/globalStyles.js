import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'

  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    '& span': {
      backgroundColor: '#EEE5FF',
      height: '2.2rem',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  searchInput: {
    backgroundColor: '#EEE5FF',
    border: 'none',
    outline: 'none',
    width: '90%',
    height: '2.2rem',
    margin: '1rem 0',
    padding: ' 0.2rem 0.6rem'
  },
  homeContainer: {
    width: '100%',
  },
  albumHeading: {
    width: '90%',
    margin: '1rem auto'
  },
  resContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '1rem auto'
  },
  resLeft: {
    display: 'flex'
  },
  resLeftPhotoContainer: {
    display: 'flex',
    '& img': {
      height: '3.2rem',
      width: '3.2rem',
    }
  },
  resLeftDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0.5rem',
  },
  resRight: {
    display: 'flex',
    flexDirection: 'column'
  },
});