import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {},
  card: {
    width: '32%',
    minHeight: '70px',
    minWidth: '140px',
    margin: '10px 5px 5px 5px',

    '@media (max-width: 899px)': {
      width: '48%',
    },
    '@media (max-width: 649px)': {
      width: '100%',
    },
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

    '& .ant-card-cover': {
      display: 'flex',
      width: '100%',
      height: '250px',
    },
  },
  img: {
    objectFit: 'cover',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px',

    '@media (max-width: 899px)': {
      margin: '1em 0 0 1.5em',
      justifyContent: 'flex-start',
    },
  },
  search: {
    width: '350px',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 3em 0 1.5em',
    marginTop: '15px',
  },
  topOfPage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    '@media (max-width: 899px)': {
      flexDirection: 'column',
    },
  },
});

export default useStyles;
