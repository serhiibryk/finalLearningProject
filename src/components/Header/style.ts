import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {
    '& .ant-layout-header': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGroundHeader,
    },

    '& .ant-menu .ant-menu-item.ant-menu-item-selected': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
    },

    '& .ant-menu': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGroundHeader,

      '& .ant-menu-title-content': {
        color: (isDarkMode: boolean) => pallet(isDarkMode).color,
      },
    },
    '& .ant-menu-item': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGroundHeader,
    },

    '& .ant-menu-dark.ant-menu-vertical>.ant-menu-item:hover': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
    },
  },
  menu: {
    '@media screen and (max-width: 1180px)': {
      display: 'none !important',
    },
    '& .ant-menu-item:last-child': {
      marginLeft: 'auto',
      top: '-2px',
    },
  },
  buttons: {
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'row',
  },
  buttonSwitch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    border: '0.1px solid;',
    width: '64px',
    height: '64px',
    fontSize: '25px',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
  },
  overlay: {
    '& .ant-dropdown-menu': {
      backgroundColor: 'black',
    },

    '& .ant-dropdown-menu-item': {
      width: '250px',
      color: 'grey',
    },
  },
  dropmenu: {
    display: 'none',
    width: '64px',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,

    '@media screen and (max-width: 1180px)': {
      display: 'block',
    },
  },
  menuDropText: {
    display: 'flex',
    justifyContent: 'center',
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
  },
  changedLog: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuWithLogo: {
    display: 'flex',
  },
  logo: {
    display: 'flex',
    position: 'static',
    padding: '0 2em 0 2em',
    cursor: 'pointer',
  },
  imgLogo: {
    width: '128px',
    height: '64px',
    minHeight: '64px',
    maxHeight: '64px',
    border: '0.1px solid;',
    borderRadius: '2px',
    color: 'grey',
  },
  // logout: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   borderColor: 'black',
  //   backgroundColor: 'black',
  //   color: 'white',
  //   position: 'static',
  //   margin: '1em',
  // },

  modal: {
    cursor: 'pointer',
    top: '0px',
    maxWidth: 'none',
    paddingBottom: '0px',
    height: '100vh',

    '&.ant-modal': {
      top: 'none',
    },

    '& .ant-modal-content': {
      height: '100vh',
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
    },

    '& .ant-modal-header': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
    },

    '& .ant-modal-title': {
      display: 'flex',
      justifyContent: 'center',
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },

    '& .ant-modal-close-x': {
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
  },

  modalText: {
    display: 'flex',
    justifyContent: 'center',
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
  },

  modalShowButton: {
    cursor: 'pointer',
    display: 'none',
    backgroundColor: 'transparent',
    width: '64px',
    height: '64px',
    borderColor: 'transparent',
    marginLeft: 'auto',
    margin: '0 30px',

    '@media screen and (max-width: 1180px)': {
      display: 'block',
    },
  },
  menuOutlined: {
    fontSize: '32px',
  },
  wrap: {},
  switcherText: {
    position: 'relative',
    top: '20px',
  },
  blackSwitcherText: {
    color: 'black',
  },
  whiteSwitcherText: {
    color: 'white',
  },
});

// border-top: 5px solid;
//   border-image: linear-gradient(
//     to right,
//     #67b775 20%,
//     #46b0d5 20%,
//     #46b0d5 40%,
//     #e3d05e 40%,
//     #e3d05e 60%,
//     #df8862 60%,
//     #df8862 80%,
//     #d75e62 80%
//   );
//   border-image-slice: 1;

export default useStyles;
