import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    // width: '1000px',
    marginTop: '35px',
    fontFamily: 'sans-serif',
    textAlign: 'center',

    '& .hex:hover': {
      borderColor: '#bb9 !important',
    },
  },
  board: {
    marginTop: '-14px',
    display: 'flex',
    justifyContent: 'center',
  },
  hex: {
    // background: '#ede',
    height: '110px',
    width: '100px',
  },
});

export default useStyles;
