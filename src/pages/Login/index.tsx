import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";

import { jwtService } from "../../services/jwt";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { userReducer } from "../../store/user/reducer";
import { localStoreService } from "../../utils";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import useStyles from "./style";
// import { localStoregeRemove, localStoreService } from "../../utils";
// import { StoreContext } from "../../store";

const Login: React.FC = () => {
  const classes = useStyles();
  const push = useNavigate();

  // const context = useContext(StoreContext);

  const { user } = useAppSelector((state: any) => state.user);
  const { userData } = useAppSelector((state: any) => state.userData);
  const dispatch = useAppDispatch();

  const openNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
    });
  };

  useEffect(() => {
    // context.setAuth(null);
    dispatch(userReducer.setUser(null));
    // localStoregeRemove("isLogged");
  }, []);

  const onFinish = (values: any) => {
    const usersList = userData;
    // const usersList = context.user;
    const checkUser = usersList.find(
      (same: any) => same.email === values.email
    );

    // const checkUser = usersList.find(
    // (same: any) => same.email === values.email
    // );

    if (checkUser && checkUser.password === values.password) {
      const { token } = jwtService.getJwt(checkUser);
      localStoreService.set("user", token);
      dispatch(userReducer.setUser(token));

      // if (checkUser && checkUser.password === values.password) {
      // const createJwt = jwtService.getJwt(checkUser);
      // localStoreService.set("user", createJwt);
      // context.setAuth(createJwt);

      push("/");
    } else {
      openNotification("Error!", "Incorrect login or password.");

      // openNotification("Error!", "Incorrect login or password.");
    }
  };
  return (
    <div className={classes.root}>
      <Form
        className={classes.LoginForm}
        name="normal_email"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            className={classes.input}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            className={classes.input}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>{" "}
          Or <a onClick={() => push("/registration")}>Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
