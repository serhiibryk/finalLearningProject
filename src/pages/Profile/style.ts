import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    marginTop: "15px",
    margin: "15px",
    width: "100%",
    "& .ant-card-meta-title": {
      padding: "0 0 0 40px",
      fontStyle: "italic",
      fontSize: "23px",
      fontWeight: "lighter",
    },
  },
  textP: {
    fontStyle: "italic",
    fontSize: "23px",
    fontWeight: "lighter",
  },
  spiner: {},
});

export default useStyles;
