import React, { FC, FormEvent, useState } from 'react';
import classNames from 'classnames';

import { useAppSelector } from '../../store/hooks/redux';

import useStyles from './style';

interface IInput {
  title: string;
  rules: any;
  placeholder: string;
  children: any;
}

const InputComponent: FC<IInput> = ({ title, rules, children, placeholder }) => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div className={classes.root}>
      <form>
        <div className={classes.inputGroup}>
          <input
            id={'input'}
            value={inputValue}
            className={classNames('inputLabel', classes.input)}
            {...rules}
            onChange={handleChange}
            // placeholder={placeholder}
          />
          <label className={classNames({ show: inputValue }, classes.inputLabelMain, 'label')} htmlFor={'input'}>
            {title}
          </label>
          {children}
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
