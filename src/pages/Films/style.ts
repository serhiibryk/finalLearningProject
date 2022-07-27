import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    marginTop: "15px",
    margin: "15px",
    width: "300px",
  },

  filmsContainer: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    flexWrap: "wrap",
  },
  img: {
    width: "300px",
    height: "185px",
  },
});

export default useStyles;
