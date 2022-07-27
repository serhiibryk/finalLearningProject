import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  img: {
    width: "385px",
    height: "210px",
  },
  card: {
    margin: "15px 30px 15px 30px",
  },
  meta: {},
  mainContainer: {
    minHeight: "calc(100vh - 134px)",
    display: "flex",
    flexWrap: "wrap",
    minWidth: "800px",
  },
});

export default useStyles;
