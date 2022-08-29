import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
  card: {
    width: "32%",
    minHeight: "70px",
    minWidth: "140px",
    margin: "10px 5px 5px 5px",

    "@media (max-width: 899px)": {
      width: "48%",
    },

    "@media (max-width: 649px)": {
      width: "99%",
    },
  },

  img: {
    objectFit: "cover",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",

    "@media (max-width: 1305px)": {
      margin: "1em 0 0 1.5em",
      justifyContent: "flex-start",
    },
  },
  search: {},
  topOfPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    "@media (max-width: 1305px)": {
      flexDirection: "column",
    },
  },
  textAndSwitch: {
    display: "flex",
    flexDirection: "row",

    "@media (max-width: 899px)": {
      flexDirection: "column",
    },
  },
  searchAndPagination: {
    display: "flex",
    flexDirection: "row",

    "@media (max-width: 899px)": {
      flexDirection: "column",
    },
  },
  contentScroll: {
    "& .infinite-scroll-component": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  switch: {
    marginLeft: "4em",
    display: "block",
    marginTop: "1.45em",
    background: "black",
    "@media (max-width: 899px)": {
      marginLeft: "1.5em",
    },
  },
  text: {
    marginTop: "0.45em",
    fontStyle: "italic",
    fontSize: "23px",
    fontWeight: "lighter",
    marginLeft: "1em",
  },
});

export default useStyles;
