import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .ant-menu": {
      display: "flex",
    },
    "& .ant-menu-item": {
      height: "87%",
    },
    "& .ant-menu-item-selected": {
      backgroundColor: "black !important",
      height: "87%",
    },

    "& .ant-menu-dark.ant-menu-vertical>.ant-menu-item:hover": {
      backgroundColor: "black !important",
    },
  },

  menu: {
    "@media screen and (max-width: 935px)": {
      display: "none !important",
    },
    "& .ant-menu-item:last-child": {
      marginLeft: "auto",
    },
  },

  overlay: {
    // width: "200px",

    "& .ant-dropdown-menu": {
      backgroundColor: "black",
    },

    "& .ant-dropdown-menu-item": {
      width: "250px",
      color: "grey",
      // backgroundColor: "black",
    },
  },

  dropmenu: {
    display: "none",
    backgroundColor: "black",
    width: "64px",

    "@media screen and (max-width: 935px)": {
      display: "block",
    },
  },

  menuDropText: {
    color: "white",
    display: "flex",
    justifyContent: "center",
  },

  changedLog: {
    display: "flex",
    justifyContent: "flex-end",
  },

  menuWithLogo: {
    display: "flex",
  },
  logo: {
    display: "flex",
    position: "static",
    padding: "0 2em 0 2em",
    cursor: "pointer",
  },
  imgLogo: {
    height: "64px",
    minHeight: "64px",
    maxHeight: "64px",
  },
  logout: {
    display: "flex",
    justifyContent: "center",
    borderColor: "black",
    backgroundColor: "black",
    color: "white",
    position: "static",
    margin: "1em",
  },

  modal: {
    cursor: "pointer",
    top: "0px",
    maxWidth: "none",
    paddingBottom: "0px",
    height: "100vh",

    "&.ant-modal": {
      top: "none",
    },

    "& .ant-modal-content": {
      height: "100vh",
      backgroundColor: "black",
    },

    "& .ant-modal-header": {
      backgroundColor: "black",
    },

    "& .ant-modal-title": {
      display: "flex",
      justifyContent: "center",
      color: "white",
    },

    "& .ant-modal-close-x": {
      color: "white",
    },
  },

  modalText: {
    display: "flex",
    justifyContent: "center",
    color: "white",
  },

  modalShowButton: {
    cursor: "pointer",
    display: "none",
    backgroundColor: "transparent",
    width: "64px",
    height: "64px",
    borderColor: "transparent",
    marginLeft: "auto",
    margin: "0 30px",
    "@media screen and (max-width: 935px)": {
      display: "block",
    },
  },
  menuOutlined: {
    fontSize: "32px",
  },
  wrap: {
    // backgroundColor: "black",
  },
});

export default useStyles;
