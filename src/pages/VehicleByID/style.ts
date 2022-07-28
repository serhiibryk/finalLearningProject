import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    marginTop: "15px",
    margin: "15px",
    width: "100%",
  },
  vehicleByIDContainer: {
    minHeight: "calc(100vh - 134px)",
    display: "flex",
    flexWrap: "wrap",
  },
});

export default useStyles;
