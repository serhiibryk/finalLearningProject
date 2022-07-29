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
  filmByIDContainer: {
    minHeight: "calc(100vh - 134px)",
    display: "flex",
    flexWrap: "wrap",
  },
  spiner: {
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textP: {
    fontStyle: "italic",
    fontSize: "23px",
    fontWeight: "lighter",
  },
});

export default useStyles;
