import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { jwtService } from '../../services/jwt';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { userReducer } from '../../store/user/reducer';
import { localStoreService } from '../../utils';
import InputComponent from '../../components/Input';

import useStyles from './style';

const Login: React.FC = () => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);
  const push = useNavigate();
  const { t } = useTranslation();

  const { data } = useAppSelector<IStateUserData>((state) => state.userData);
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: IValueLogin) => {
    const checkUser = data.find((same) => same.email === values.email);
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
      <form className={classes.LoginForm} onSubmit={handleSubmit(onSubmit as any)}>
        <InputComponent
          rules={register('email', {
            required: true,
            maxLength: 20,
          })}
          title={'Email'}
          placeholder={t('email')}
        >
          {errors.email && <p className={classes.errorText}>The input is not valid E-mail!</p>}
        </InputComponent>
        <InputComponent
          rules={register('password', {
            required: true,
            minLength: {
              value: 1,
              message: 'Password must have at least 8 characters',
            },
          })}
          title={'Password'}
          placeholder={t('password')}
        >
          {errors.password && <p className={classes.errorText}>Password must have at least 8 characters</p>}
        </InputComponent>

        <div className={classes.loginButtonContainer}>
          <button className={classes.loginButton} type={'submit'}>
            Login
          </button>{' '}
          <span>{t('or')}</span>{' '}
          <a className={classes.registerNowLink} href={'/registration'} onClick={() => push('/registration')}>
            {t('registerLink')}
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
