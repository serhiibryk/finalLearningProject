import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  img: {
    objectFit: "cover",
  },
  card: {
    marginTop: "15px",
    width: "33%",
    height: "10%",
    minWidth: "140px",
  },
  meta: {},
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
  spiner: {
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default useStyles;
