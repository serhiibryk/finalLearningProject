import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    marginTop: "15px",
    width: "33%",
    minHeight: "70px",
    minWidth: "140px",
  },

  content: {
    display: "flex",
    flexWrap: "wrap",
    "& .ant-card-cover": {
      display: "flex",
      width: "100%",
      height: "250px",
    },
  },

  root: {},

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
