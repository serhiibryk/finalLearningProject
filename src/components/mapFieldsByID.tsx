import { Divider, Tag } from "antd";
import React from "react";

const MapFieldsByID: React.FunctionComponent<IMapFields> = ({
  lable,
  list,
  title,
}) => {
  return list.length ? (
    <>
      <Divider orientation="left">{lable}:</Divider>
      <div>
        {list.map((id) => (
          <Tag color="geekblue">{id[title]}</Tag>
        ))}
      </div>
    </>
  ) : (
    <div></div>
  );
};

export default MapFieldsByID;
