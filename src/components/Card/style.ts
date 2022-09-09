import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {},
  card: {
    border: 'none',
    width: '32%',
    minWidth: '140px',
    margin: '10px 5px 5px 5px',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,

    '& .ant-card-meta-title': {
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },

    '@media (max-width: 899px)': {
      width: '48%',
    },

    '@media (max-width: 649px)': {
      width: '100%',
    },
  },
  img: {
    objectFit: 'cover',
  },
});

export default useStyles;
