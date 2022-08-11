import React from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";
import Route from "./routes";

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Header />
          <Content className="content">
            <Route />
          </Content>
          <Footer />
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

export default App;
