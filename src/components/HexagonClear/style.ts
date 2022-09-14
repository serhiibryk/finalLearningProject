import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    marginTop: '35px',
    fontFamily: 'sans-serif',
    textAlign: 'center',

    '& .hex:hover': {
      borderColor: '#e6e6ea !important',
    },
  },
  board: {
    marginTop: '-14px',
    display: 'flex',
    justifyContent: 'center',
  },
  hex: {
    // borderColor: '#e6e6ea',
    // background: 'red',
    height: '110px',
    width: '100px',
  },
});

export default useStyles;
