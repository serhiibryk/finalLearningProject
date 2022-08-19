import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
  card: {
    width: "32%",
    minHeight: "70px",
    minWidth: "140px",
    margin: "10px 5px 5px 6px",

    "@media (max-width: 980px)": {
      width: "48%",
    },

    "@media (max-width: 549px)": {
      width: "100%",
    },
  },

  img: {
    objectFit: "cover",
  },
  spiner: {
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
  },
  search: {
    display: "flex",
    justifyContent: "space-around",
    margin: "0 3em 0 1.5em",
    marginTop: "15px",
  },
  topOfPage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  contentScroll: {
    "& .infinite-scroll-component": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
  },
});

export default useStyles;
