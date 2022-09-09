import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {
    minHeight: 'calc(100vh - 134px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,

    '& .ant-card-cover': {
      display: 'flex',
      width: '100%',
      height: '250px',
    },
  },
  '& .ant-layout-content content': {
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
  },
  img: {
    objectFit: 'cover',
  },
  card: {
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,

    border: 'none',
    width: '32%',
    minWidth: '140px',
    margin: '10px 5px 5px 5px',

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

  spiner: {
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default useStyles;
