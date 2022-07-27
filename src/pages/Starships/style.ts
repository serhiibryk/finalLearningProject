import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    marginTop: "15px",
    margin: "15px",
    width: "300px",
  },
  starshipsContainer: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    flexWrap: "wrap",
  },
});

export default useStyles;
