import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";

import { StoreContext } from "../../store";

import useStyles from "./style";
import { localStoreService } from "../../utils";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Registration: React.FC = () => {
  const classes = useStyles();
  const [formAntd] = Form.useForm();

  const context = useContext(StoreContext);
  const push = useNavigate();
  const [formAntd] = Form.useForm();

  const context = useContext(StoreContext);
  const push = useNavigate();

  const openNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
    });
  };

  const onFinish = (values: any) => {
    const res = [...context.user];
    const checkEmail = res.find((same: any) => same.email === values.email);

    if (checkEmail) {
      openNotification(
        "Error",
        "Such a login already exists in the system. Enter, please, another login."
      );
    } else {
      res.push(values);

      localStoreService.set("userData", res);
      context.setUser(res);
      push("/login");
    }
  };

  // // const prefixSelector = (
  // //   <Form.Item name="prefix" noStyle>
  // //     <Select style={{ width: 70 }}>
  // //       <Option value="86">+86</Option>
  // //       <Option value="87">+87</Option>
  // //     </Select>
  // //   </Form.Item>
  // // );

  // // const suffixSelector = (
  // //   <Form.Item name="suffix" noStyle>
  // //     <Select style={{ width: 70 }}>
  // //       <Option value="USD">$</Option>
  // //       <Option value="CNY">¥</Option>
  // //     </Select>
  // //   </Form.Item>
  // // );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div className={classes.registerContainer}>
      <Form
        {...formItemLayout}
        className={classes.registerForm}
        form={formAntdAntd}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
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
          <Input value="email" value="email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password::"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
