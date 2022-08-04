import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useStyles from "./style";

const Login: React.FC = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const submitUserData = () => {

  //   const user = {
  //     email: email,
  //     password: password,
  //   };
  //   localStorage.setItem("users", JSON.stringify(user));
  // };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Form
        className={classes.LoginForm}
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Login!" }]}
        >
          <Input
            className={classes.input}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Login"
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
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
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            // onClick={submitUserData}
          >
            Log in
          </Button>
          Or <a onClick={() => navigate("/registration")}>register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
