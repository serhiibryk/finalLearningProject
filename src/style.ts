import { createUseStyles } from 'react-jss';
import { pallet } from './utils';

const useStyles = createUseStyles({
  root: {
    '& .ant-layout-content.content': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
    },
  },
});

export default useStyles;
