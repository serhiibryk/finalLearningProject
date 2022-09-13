import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import { Button, Card, Skeleton } from 'antd';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';

import { imgFilmsList, localStoreService } from '../../utils';
import Graphic1 from '../../components/Graphics/1';
import Graphic2 from '../../components/Graphics/2';
import Graphic3 from '../../components/Graphics/3';
import Graphic4 from '../../components/Graphics/4';
import useToggle from '../../store/hooks/useToggle';
import MyModal from '../../components/MyReactModal';
import ModalANT from '../../components/ModalANT';
import { useAppSelector } from '../../store/hooks/redux';

import useStyles from './style';
import 'swiper/swiper.min.css';
import HexGridDemo from '../../components/Hexagongrid/grid';
import HexagonClear from '../../components/HexagonClear';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

const token = localStoreService.get('user');

const Profile = () => {
  const [decoded, setDecoded] = useState<DecodedData | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, onModalOpen, onModalClose] = useToggle();

  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);
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
          <ModalANT
            title={'Graphic dlia tebia blyat'}
            footer={null}
            afterClose={() => handleChangeView(false)}
            onCancel={() => handleChangeView(false)}
            visible={isModalVisible}
          >
            <Graphic1 />
          </ModalANT>
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
        <div className={classes.containerBox}>
          <div className={classes.smallContainer}>
            <Swiper
              slidesPerView={'auto'}
              slidesPerGroup={1}
              spaceBetween={5}
              autoplay={{
                delay: 3000,
              }}
              speed={400}
            >
              {imgFilmsList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={classes.box}>
                    <img className={classes.img} src={item.imgLink}></img>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <br />
        <div>
          <HexGridDemo />
        </div>
      </Card>
      <HexagonClear />
    </div>
  );
};

export default Profile;
