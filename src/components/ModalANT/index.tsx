import { Modal } from 'antd';
import React, { FC } from 'react';

import useStyles from './style';

interface IModalAnt {
  title: string;
  footer: string | null;
  afterClose: () => void;
  onCancel: () => void;
  visible: boolean;
  children: JSX.Element;
}

const ModalANT: FC<IModalAnt> = ({ title, footer, afterClose, onCancel, visible, children }) => {
  const classes = useStyles();

  return (
    <Modal
      afterClose={afterClose}
      className={classes.modalAnt}
      title={title}
      footer={footer}
      visible={visible}
      onCancel={onCancel}
    >
      {children}
    </Modal>
  );
};

export default ModalANT;
