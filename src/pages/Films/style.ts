import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {},
  card: {
    width: '32%',
    minHeight: '70px',
    minWidth: '140px',
    margin: '10px 5px 5px 5px',

    '@media screen and (max-width: 899px)': {
      width: '48%',
    },
    '@media screen and (max-width: 649px)': {
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
  spiner: {
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px',
  },
});

export default useStyles;
