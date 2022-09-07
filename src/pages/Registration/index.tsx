import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { notification } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { userDataReducer } from '../../store/userData/reducer';
import { localStoreService } from '../../utils';
import InputComponent from '../../components/Input';

import useStyles from './style';

const Registration: React.FC = () => {
  const classes = useStyles();

  const { data } = useAppSelector<any>((state) => state.userData);
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const openNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: IValueRegister) => {
    console.log(values);

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
      <form className={classes.mainForm} onSubmit={handleSubmit(onSubmit as any)}>
        <InputComponent
          rules={register('email', {
            required: true,
            maxLength: 20,
          })}
          title={'Email'}
          placeholder={'Email'}
        >
          {errors.email && <p className={classes.errorText}>The input is not valid E-mail!</p>}
        </InputComponent>
        <InputComponent
          rules={register('password', {
            required: true,
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
          title={'Password'}
          placeholder={'Password'}
        >
          {errors.password && <p className={classes.errorText}>Password must have at least 8 characters</p>}
        </InputComponent>
        <InputComponent
          rules={register('confirm_password', {
            required: true,

            validate: (val: string) => {
              if (watch('password') !== val) {
                return 'Your passwords do no match';
              }
            },
          })}
          title={'Confirm password'}
          placeholder={'Repeat password'}
        >
          {errors.confirm_password && <p className={classes.errorText}>These two passwords do not match!</p>}
        </InputComponent>
        <InputComponent
          rules={register('nickName', {
            required: true,
            maxLength: 20,
          })}
          title={'Nick Name'}
          placeholder={'Nickname'}
        >
          {errors.nickName && <p className={classes.errorText}>Please input your nickname!</p>}
        </InputComponent>

        <div className={classes.emailInput}>
          <button className={classes.registerButton} type={'submit'}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
