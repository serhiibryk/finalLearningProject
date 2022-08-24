import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
  card: {
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

    "@media (max-width: 999px)": {
      width: "48%",
    },
    "@media (max-width: 535px)": {
      width: "99%",
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
    justifyContent: "flex-start",
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
