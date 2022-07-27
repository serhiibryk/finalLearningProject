import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  LoginForm: {
    minHeight: "calc(100vh - 134px)",
    padding: "5em",
    display: "block",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    width: "400px",
  },
});

export default useStyles;
