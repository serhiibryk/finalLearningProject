import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    marginTop: '15px',
    margin: '15px',
    width: '100%',
    maxWidth: '98%',
    '& .ant-card-meta-title': {
      padding: '0 0 0 40px',
      fontStyle: 'italic',
      fontSize: '23px',
      fontWeight: 'lighter',
    },
  },
  textP: {
    fontStyle: 'italic',
    fontSize: '23px',
    fontWeight: 'lighter',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
  },
  spiner: {
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '400px',
  },
});

export default useStyles;
