import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import { Button, Card, Modal, Skeleton } from 'antd';
import moment from 'moment';

import { localStoreService } from '../../utils';
import Graphic1 from '../../components/Graphics/1';
import Graphic2 from '../../components/Graphics/2';
import Graphic3 from '../../components/Graphics/3';
import Graphic4 from '../../components/Graphics/4';

import useStyles from './style';
import useToggle from '../../store/hooks/useToggle';
import MyModal from '../../components/MyModal';

const token = localStoreService.get('user');

const Profile = () => {
  const [decoded, setDecoded] = useState<DecodedData | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, onModalOpen, onModalClose] = useToggle();

  const classes = useStyles();
  const decodedData = useJwt(token);

  const handleChangeView = (value: boolean) => {
    setIsModalVisible(value);
  };

  useEffect(() => {
    setTimeout(() => {
      setDecoded(decodedData.decodedToken as DecodedData);
    }, 1000);
  }, [decodedData]);

  return (
    <div className={classes.root}>
      <Card className={classes.card} hoverable>
        <div className={classes.graphics}>
          <div className={classes.graphicsOneTwo}>
            <div className={classes.graphicOne}>
              <Graphic1 />
            </div>
            <div className={classes.graphicTwo}>
              <Graphic2 />
            </div>
          </div>
          <div className={classes.graphicsThreeFour}>
            <div className={classes.graphicThree}>
              <Graphic3 />
            </div>
            <div className={classes.graphicFour}>
              <Graphic4 />
            </div>
          </div>
        </div>
        <br />
        <div className={classes.buttonsModal}>
          <Button className={classes.buttonAntModal} type={'primary'} onClick={() => handleChangeView(true)}>
            Modal-Ant
          </Button>
          <Modal
            afterClose={() => handleChangeView(false)}
            className={classes.modalAnt}
            title={'Graphic dlia tebia blyat'}
            footer={null}
            visible={isModalVisible}
            onCancel={() => handleChangeView(false)}
            width={'100%'}
          >
            <Graphic1 />
          </Modal>
          <Button className={classes.buttonReactModal} onClick={onModalOpen}>
            Modal-React
          </Button>
          {isModalOpen && <MyModal onClose={onModalClose} />}
        </div>
        <br />
        <br />
        {decoded ? (
          <div>
            <p>Token:</p>
            <p className={classes.textP}>{token}</p>
            <p>Decode:</p>
            <ul>
              <li>{decoded.firstName}</li>
              <li>{decoded.lastName}</li>
              <li>{decoded.nickname}</li>
              <li>{decoded.phone}</li>
              <li>{decoded.address}</li>
              <li>{decoded.email}</li>
              <li>{decoded.aud}</li>
              <li>{decoded.iss}</li>
              <li>{decoded.exp}</li>
              <li>{decoded.iat}</li>
              <li>{decoded.sub}</li>
            </ul>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
          </div>
        ) : (
          <Skeleton active />
        )}
      </Card>
    </div>
  );
};

export default Profile;

// 4 рандомн графіка
// 2 кнопки
// (1 ант модальне окно + рендер графік в ньому)
// ( 2 реакт кріейт портал + рендер графіку в ньому)
