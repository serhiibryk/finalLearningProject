import React, { FC } from 'react';
import Portal from '../Portal';
import useStyles from './style';

interface IModaleComponent {
  onClose: any;
  children: any;
}

const ModalComponent: FC<IModaleComponent> = ({ onClose, children }) => {
  const classes = useStyles();
  return (
    <Portal id={'portal'}>
      <div className={classes.root} onClick={onClose}>
        <div
          className={classes.container}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
          <button className={classes.buttonClose} onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default ModalComponent;
