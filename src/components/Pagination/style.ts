import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {},
  pagination: {
    '& .ant-pagination-item-link': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
    '& .ant-pagination-item a': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
  },
});

export default useStyles;
