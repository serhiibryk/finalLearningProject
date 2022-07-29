import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    marginTop: "15px",
    width: "33%",
    minWidth: "140px",
  },

  root: {
    minHeight: "calc(100vh - 134px)",
    display: "flex",
    flexWrap: "wrap",
    "& .ant-card-cover": {
      display: "flex",
      width: "100%",
      height: "250px",
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
});

export default useStyles;
