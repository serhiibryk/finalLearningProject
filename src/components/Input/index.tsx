import React, { FC } from 'react';
import classNames from 'classnames';

import useStyles from './style';

interface IInput {
  title: string;
  attribute: any;
  placeholder: string;
  children: any;
}

const InputComponent: FC<IInput> = ({ title, attribute, children, placeholder }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form>
        <div className={classes.inputGroup}>
          <input
            id={'input'}
            className={classNames('inputLabel', classes.input)}
            {...attribute}
            // placeholder={placeholder}
          />
          <label className={classNames(classes.inputLabel, 'label')} htmlFor={'input'}>
            {title}
          </label>
          {children}
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
