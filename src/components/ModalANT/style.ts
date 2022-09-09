import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {},

  modalAnt: {
    width: '100%',
    maxWidth: 'none',
    paddingBottom: '0px',
    height: '100vh',

    '& .ant-modal-body': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
    '& .ant-modal-header': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
    '& .ant-modal-title': {
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
    '& .ant-modal-close-x': {
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
  },
});

export default useStyles;
