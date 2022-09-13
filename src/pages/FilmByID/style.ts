import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    marginTop: '15px',
    margin: '15px',
    width: '100%',
    border: 'none',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,

    '& .ant-card-meta-title': {
      padding: '0 0 0 40px',
      fontStyle: 'italic',
      fontSize: '23px',
      fontWeight: 'lighter',
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
    '& .ant-divider-inner-text': {
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },

    '@media (max-width: 450px)': {
      width: '93%',
    },
  },
  filmByIDContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  spiner: {
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textP: {
    fontStyle: 'italic',
    fontSize: '23px',
    fontWeight: 'lighter',
  },
});

export default useStyles;
