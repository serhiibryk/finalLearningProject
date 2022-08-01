import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
  card: {
    margin: "10px 5px 5px 5px",
    width: "32%",
    minHeight: "70px",
    minWidth: "140px",
  },
  content: {
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
});

export default useStyles;
