import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {},
  textAlign: {
    textAlign: 'center',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGroundHeader,
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
  },
});

export default useStyles;
