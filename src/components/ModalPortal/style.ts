import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'relative',
    height: '100%',
    borderRadius: '2px',
    backgroundColor: 'white',
    padding: '20px',
  },
  buttonClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '10px',
  },
});

export default useStyles;
