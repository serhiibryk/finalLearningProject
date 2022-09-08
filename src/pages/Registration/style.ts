import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainForm: {
    padding: '8em',
  },
  registerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  emailInput: {},
  registerButton: {
    marginTop: '30px',
    width: 'auto',
    height: '30px',
    borderColor: '#ccc #ccc',
    borderBottom: '0rem solid ',
    borderStyle: 'solid',
    borderWidth: '2px',
    color: 'initial',
    display: 'inline-block',
    textAlign: 'start',
    margin: '1em 0 0 0 ',
    font: '150 15px system-ui',
    fontStyle: 'italic',
    fontSize: '15px',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    backgroundColor: 'white',
  },
  input: {
    '& .input:focus': {},
  },
  errorText: {
    color: 'red',
    position: 'absolute',
    marginTop: '-5px',
  },
});

export default useStyles;
