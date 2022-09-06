import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    marginBottom: 25,
  },
  title: {
    position: 'relative',
    marginTop: '1em',
    fontStyle: 'italic',
    fontSize: '15px',
    fontWeight: 'lighter',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
  },
  inputGroup: {
    position: 'relative',
    '& .inputLabel:focus  + .label': {
      top: '-21px',
    },
  },
  inputLabel: {
    color: '#A9A9A9',
    position: 'absolute',
    top: 12,
    marginLeft: 5,
  },
  inputHelper: {},
  input: {
    fontSize: '16px',
    padding: '10px',
    display: 'block',
    width: '300px',
    border: 'none',
    borderBottom: '2px solid #ccc',

    '&:focus': {
      backgroundColor: '#C0C0C0',
      outline: 'none',
    },
  },
  '& input + label': {
    top: '10px',
  },
});

export default useStyles;
