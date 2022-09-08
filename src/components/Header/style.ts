import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .ant-menu': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .ant-menu-item': {
      // height: "100%",
    },
    '& .ant-menu-item-selected': {
      backgroundColor: 'black !important',
      // height: "87%",
    },

    '& .ant-menu-dark.ant-menu-vertical>.ant-menu-item:hover': {
      backgroundColor: 'black !important',
    },
  },

  menu: {
    '@media screen and (max-width: 1180px)': {
      display: 'none !important',
    },
    '& .ant-menu-item:last-child': {
      marginLeft: 'auto',
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
    backgroundColor: 'black',
    borderColor: 'grey',
    border: '0.1px solid;',
    color: 'white',
    width: '64px',
    height: '64px',
    fontSize: '25px',
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
    backgroundColor: 'black',
    width: '64px',

    '@media screen and (max-width: 1180px)': {
      display: 'block',
    },
  },

  menuDropText: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
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
  logout: {
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'black',
    backgroundColor: 'black',
    color: 'white',
    position: 'static',
    margin: '1em',
  },

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
      backgroundColor: 'black',
    },

    '& .ant-modal-header': {
      backgroundColor: 'black',
    },

    '& .ant-modal-title': {
      display: 'flex',
      justifyContent: 'center',
      color: 'white',
    },

    '& .ant-modal-close-x': {
      color: 'white',
    },
  },

  modalText: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
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

export default useStyles;
