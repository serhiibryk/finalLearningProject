import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {},
  search: {
    width: '350px',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 3em 0 1.5em',
    marginTop: '15px',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,

    '& .ant-input': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
  },
});

export default useStyles;
