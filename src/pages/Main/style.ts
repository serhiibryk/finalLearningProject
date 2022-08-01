import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    minHeight: "calc(100vh - 134px)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",

    "& .ant-card-cover": {
      display: "flex",
      width: "100%",
      height: "250px",
    },
  },
  img: {
    objectFit: "cover",
  },
  card: {
    width: "32%",
    minWidth: "140px",
    margin: "10px 5px 5px 5px",
  },
  spiner: {
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default useStyles;
