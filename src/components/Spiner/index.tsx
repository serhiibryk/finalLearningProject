import React from "react";
import { Space, Spin } from "antd";

const Spiner: React.FunctionComponent<ISpiner> = ({ classes }) => {
  return (
    <Space size="middle" className={classes}>
      <Spin size="large" />
    </Space>
  );
};

export default Spiner;
