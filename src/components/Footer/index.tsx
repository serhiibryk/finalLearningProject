import React from 'react';
import { Layout } from 'antd';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

import useStyles from './style';
import { useAppSelector } from '../../store/hooks/redux';

const { Footer: FooterAnt } = Layout;

const Footer = () => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);
  const date = format(new Date(), 'yyyy-MM-dd');
  const { t } = useTranslation();
  return (
    <FooterAnt className={classes.textAlign}>
      <div>
        <p>
          {' '}
          {t('rights')}&#174; &mdash;&mdash; {date}
        </p>
      </div>
    </FooterAnt>
  );
};

export default Footer;
