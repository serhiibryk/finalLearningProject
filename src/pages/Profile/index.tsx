import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import { Button, Card, Modal, Skeleton } from 'antd';
import moment from 'moment';

import { localStoreService } from '../../utils';
import Graphic1 from '../../components/Graphics/1';
import Graphic2 from '../../components/Graphics/2';

import useStyles from './style';
import Graphic3 from '../../components/Graphics/3';
import Graphic4 from '../../components/Graphics/4';

const token = localStoreService.get('user');

const Profile = () => {
  const [decoded, setDecoded] = useState<DecodedData | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const classes = useStyles();
  const decodedData = useJwt(token);

  const handleChangeView = (value: boolean) => {
    setIsModalVisible(value);
  };

  // const handleClickLogin = () => {
  //   // push('/login');
  //   handleChangeView(false);
  // };

  // const handleClick = () => {
  //   // push(item);
  //   handleChangeView(false);
  // };

  useEffect(() => {
    setTimeout(() => {
      setDecoded(decodedData.decodedToken as DecodedData);
    }, 1000);
  }, [decodedData]);

  return (
    <div className={classes.root}>
      <Card className={classes.card} hoverable>
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
        <div className={classes.graphics}>
          <div className={classes.graphicsOneTwo}>
            <Graphic1 />
            <Graphic2 />
          </div>
          <div className={classes.graphicsThreeFour}>
            <Graphic3 />
            <Graphic4 />
          </div>
        </div>
        <br />
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
            // wrapClassName={classes.wrap}
          >
            <Graphic1 />
          </Modal>
          <Button className={classes.buttonReactModal}>Modal-React</Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;

// 4 рандомн графіка
// 2 кнопки
// (1 ант модальне окно + рендер графік в ньому)
// ( 2 реакт кріейт портал + рендер графіку в ньому)
