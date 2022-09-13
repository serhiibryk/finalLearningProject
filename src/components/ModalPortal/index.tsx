import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks/redux';
import Portal from '../Portal';
import useStyles from './style';

interface IModaleComponent {
  onClose: any;
  children: any;
}

const ModalComponent: FC<IModaleComponent> = ({ onClose, children }) => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);
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
