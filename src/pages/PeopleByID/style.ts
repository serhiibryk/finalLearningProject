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
    "@media (max-width: 450px)": {
      width: "93%",
    },
  },
  peopleByIDContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  spiner: {
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default useStyles;
