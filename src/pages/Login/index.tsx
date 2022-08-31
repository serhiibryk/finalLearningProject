import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';

import { jwtService } from '../../services/jwt';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { userReducer } from '../../store/user/reducer';
import { localStoreService } from '../../utils';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import useStyles from './style';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const classes = useStyles();
  const push = useNavigate();
  const { t } = useTranslation();

  const { data } = useAppSelector((state: any) => state.userData);
  const dispatch = useAppDispatch();
  const openNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
    });
  };

  useEffect(() => {
    localStoreService.remove('user');
    dispatch(userReducer.setUser(null));
  }, [dispatch]);

  const onFinish = (values: any) => {
    const checkUser = data.find((same: any) => same.email === values.email);
    if (checkUser && checkUser.password === values.password) {
      const { token } = jwtService.getJwt();
      localStoreService.set('user', token);
      dispatch(userReducer.setUser(token));
      push('/');
    } else {
      openNotification('Error!', 'Incorrect login or password.');
    }
  };
  return (
    <div className={classes.root}>
      <Form className={classes.LoginForm} name={'normal_email'} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name={'email'}
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
          <Input
            className={classes.input}
            prefix={<UserOutlined className={'site-form-item-icon'} />}
            placeholder={t('email')}
          />
        </Form.Item>
        <Form.Item name={'password'} rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input
            className={classes.input}
            prefix={<LockOutlined className={'site-form-item-icon'} />}
            type={'password'}
            placeholder={t('password')}
          />
        </Form.Item>
        <Form.Item>
          <Button type={'primary'} htmlType={'submit'} className={'login-form-button'}>
            {t('menuLogIn')}
          </Button>{' '}
          <span>{t('or')}</span>{' '}
          <a href={'/registration'} onClick={() => push('/registration')}>
            {t('registerLink')}
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
