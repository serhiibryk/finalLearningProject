import { createUseStyles } from 'react-jss';
import { pallet } from '../utils';

const useStyles = createUseStyles({
  root: {
    maxWidth: '1450px',
    margin: '0 auto',
    padding: '0 32px 0 60px',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,

    '& .ant-layout-content content': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
    },
  },
});

export default useStyles;
