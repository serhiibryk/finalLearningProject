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

    "& .ant-menu-dark.ant-menu-vertical": {
      width: "100%",
    },
  },

  menu: {
    "@media screen and (max-width: 935px)": {
      display: "none !important",
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
});

export default useStyles;
