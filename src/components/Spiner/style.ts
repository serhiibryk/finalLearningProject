import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},

  spiner: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export default useStyles;
