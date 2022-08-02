import { Divider, Tag } from "antd";
import React from "react";

const MapFieldsByID: React.FunctionComponent<IMapFields> = ({
  lable,
  list,
  title,
}) => {
  console.log(list[0]);

  return (
    <>
      <Divider orientation="left">{lable}:</Divider>
      <div>
        {list.map((id) => (
          <Tag color="geekblue">{id[title]}</Tag>
        ))}
      </div>
    </>
  );
};

export default MapFieldsByID;
