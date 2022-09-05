import { FC } from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../../store/hooks/usePortal';

interface IPortal {
  id: string;
  children: any;
}

const Portal: FC<IPortal> = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default Portal;
