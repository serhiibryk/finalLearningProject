import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
  card: {
    // margin: "10px 5px 5px 5px",
    margin: "10px 0 0 18px",
    width: "100%",
    minHeight: "70px",
    minWidth: "140px",
  },

  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "felx-start",
    columnGap: "10px",
    rowGap: "5px",

    "& .ant-card-cover": {
      display: "flex",
      width: "100%",
      height: "250px",
    },
  },
  items: {
    width: "32%",
    // 999px
    "@media (max-width: 750px)": {
      width: "48%",
    },
    // 535px
    "@media (max-width: 499px)": {
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

    // "@media (max-width: 999px)": {
    //   margin: "1em 0 0 1.5em",
    //   justifyContent: "flex-start",
    // },
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
    justifyContent: "flex-start",

    // "@media (max-width: 999px)": {
    //   flexDirection: "column",
    // },
  },
  text: {
    marginTop: "0.45em",
    fontStyle: "italic",
    fontSize: "23px",
    fontWeight: "lighter",
    marginLeft: "15px",
  },
});

export default useStyles;
