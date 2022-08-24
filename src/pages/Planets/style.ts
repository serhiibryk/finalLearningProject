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
    margin: "15px 0 0 10px",
  },
  topOfPage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  contentScroll: {
    "& .infinite-scroll-component": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
  },
  switch: {
    display: "block",
    marginTop: "1.45em",
    background: "black",
    marginLeft: "40px",
  },
  text: {
    marginTop: "0.45em",
    fontStyle: "italic",
    fontSize: "23px",
    fontWeight: "lighter",
    marginLeft: "10px",
  },
});

export default useStyles;
