import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Route from './routes';
import { useAppSelector } from './store/hooks/redux';

import './App.css';
import useStyles from './style';

const { Content } = Layout;

function App() {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode);

  const classes = useStyles(isDarkMode as boolean);
  return (
    <Layout className={classes.root}>
      <BrowserRouter>
        <Header />
        <Content className={'content'}>
          <Route />
        </Content>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
