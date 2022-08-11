import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";

// import { localStoregeRemove, localStoreService } from "../../utils";
// import { StoreContext } from "../../store";
import { jwtService } from "../../services/jwt";
import { useAppSelector } from "../../store/hooks/redux";

import useStyles from "./style";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login: React.FC = () => {
  const classes = useStyles();
  const push = useNavigate();

  // const context = useContext(StoreContext);
  const { user } = useAppSelector((state: any) => state.user);
  const { userData } = useAppSelector((state: any) => state.userData);

  const openNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
    });
  };

  useEffect(() => {
    // context.setAuth(false);
    // localStoregeRemove("isLogged");
  }, []);

  const onFinish = (values: any) => {
    // const usersList = context.user;

    // const checkUser = usersList.find(
    // (same: any) => same.email === values.email
    // );
    // if (checkUser && checkUser.password === values.password) {
    // const createJwt = jwtService.getJwt(checkUser);
    // localStoreService.set("user", createJwt);
    // context.setAuth(createJwt);
    push("/");
    // } else {
    // openNotification("Error!", "Incorrect login or password.");
    // }
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
