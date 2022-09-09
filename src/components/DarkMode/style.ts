import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    top: '20px',
    right: '20px',

    '&.ant-switch': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
      backgroundImage: 'none',
      '& .ant-switch-handle::before': {
        height: '100%',
        backgroundImage:
          'url(https://htmlcolorcodes.com/assets/images/colors/black-color-solid-background-1920x1080.png)',
        backgroundRepeat: 'repeat-y',
        backgroundSize: '50% auto',
      },
    },
  },
});

export default useStyles;
