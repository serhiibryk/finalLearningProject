import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .show": {
      "& .ant-menu-item-selected": {
        backgroundColor: "black !important",
      },
    },
    "& .ant-menu-dark.ant-menu-horizontal>.ant-menu-item:hover": {
      backgroundColor: "black !important",
    },
    // "& .ant-menu-item": {
    //   width: "140px",
    // },
  },
  menuWithLogo: {
    display: "flex",
  },
  logo: {
    display: "flex",
    position: "static",
    padding: "0 2em 0 2em",
  },
  imgLogo: {
    height: "64px",
    minHeight: "64px",
    maxHeight: "64px",
  },
  // textLogo: {
  //   font: "italic small-caps bold 17px/1.3 cursive",
  //   color: "white",
  // },
});

export default useStyles;
