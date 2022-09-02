import React, { FC } from 'react';
import Graphic3 from '../Graphics/3';
import ModalComponent from '../Modal';

interface IMyModal {
  onClose: any;
}

const MyModal: FC<IMyModal> = ({ onClose }) => {
  return (
    <ModalComponent onClose={onClose}>
      <p>Graphic dlia tebia blyat</p>
      <Graphic3 />
    </ModalComponent>
  );
};

export default MyModal;
