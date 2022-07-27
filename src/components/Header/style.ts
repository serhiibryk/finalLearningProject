import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .show": {
      "& .ant-menu-item-selected": {
        backgroundColor: "green !important",
      },
    },
    "& .ant-menu-dark.ant-menu-horizontal>.ant-menu-item:hover": {
      backgroundColor: "green !important",
    },
  },
});

export default useStyles;
