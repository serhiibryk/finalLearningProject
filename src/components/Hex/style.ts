import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
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
});

export default useStyles;
