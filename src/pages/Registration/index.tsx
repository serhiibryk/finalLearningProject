import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';

import { localStoreService } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { userDataReducer } from '../../store/userData/reducer';

import useStyles from './style';

const Registration: React.FC = () => {
  const classes = useStyles();
  const [formAntd] = Form.useForm();

  const { data } = useAppSelector<any>((state) => state.userData);
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const openNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
    });
  };

  const onFinish = (values: IValueRegister) => {
    const res = [...data];

    const checkEmail = res.find((same) => same.email === values.email);

    if (checkEmail) {
      openNotification('Error', 'Such a login already exists in the system. Enter, please, another login.');
    } else {
      res.push(values);
      localStoreService.set('userData', res);
      dispatch(userDataReducer.set(res));
      push('/login');
    }
  };
  return (
    <div className={classes.registerContainer}>
      <Form className={classes.registerForm} form={formAntd} name={'register'} onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name={'email'}
          label={'E-mail'}
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input value={'email'} />
        </Form.Item>

        <Form.Item
          name={'password'}
          label={'Password'}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name={'confirm'}
          label={'Confirm Password:'}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              async validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return await Promise.resolve();
                }
                return await Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name={'nickname'}
          label={'Nickname'}
          tooltip={'What do you want others to call you?'}
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type={'primary'} htmlType={'submit'}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
