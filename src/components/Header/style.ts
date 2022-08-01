import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .ant-menu-item-selected": {
      backgroundColor: "black !important",
    },

    "& .ant-menu-dark.ant-menu-horizontal>.ant-menu-item:hover": {
      backgroundColor: "black !important",
    },
    "& .ant-menu-dark.ant-menu-horizontal": {
      width: "100%",
    },
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
});

export default useStyles;
