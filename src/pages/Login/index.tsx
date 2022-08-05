import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../store";

import useStyles from "./style";

const Login: React.FC = () => {
  const classes = useStyles();
  const push = useNavigate();
  const context = useContext(StoreContext);

  const openNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
    });
  };

  const onFinish = (values: any) => {
    // console.log("Received values of form: ", values);
    const check = JSON.parse(localStorage.getItem("userData") || "");
    // console.log(check);
    const checkEmail = check.find((same: any) => same.email === values.email);
    // console.log(checkEmail && checkEmail.password === values.password);
    // console.log(localStorage);
    if (checkEmail && checkEmail.password === values.password) {
      // context.setAuth(true);
      localStorage.setItem("isLogged", "true");

      push("/");
    } else {
      openNotification("Error!", "Incorrect login or password.");
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
          </Button>
          Or <a onClick={() => push("/registration")}>register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
