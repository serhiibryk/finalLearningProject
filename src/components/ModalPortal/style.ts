import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
  },
  container: {
    position: 'relative',

    height: '100%',
    borderRadius: '2px',
    padding: '20px',
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
  },
  buttonClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '10px',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
  },
});

export default useStyles;
