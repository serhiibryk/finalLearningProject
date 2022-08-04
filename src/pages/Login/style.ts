import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  LoginForm: {
    minHeight: "calc(100vh - 134px)",
    padding: "5em",
    display: "block",
  },
  input: {
    width: "400px",
  },
});

export default useStyles;
