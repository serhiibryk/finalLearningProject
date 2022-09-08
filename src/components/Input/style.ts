import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    marginBottom: 25,
    // '& .label': {
    //   display: 'none',
    // },
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

    '& .inputLabel:focus + .label': {
      display: 'block',
      top: '-21px',
    },
    '& .show': {
      top: '-21px',
    },
  },
  inputLabelMain: {
    color: '#A9A9A9',
    position: 'absolute',
    // display: 'none',
    top: 12,
    marginLeft: 5,
    display: 'block',
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
