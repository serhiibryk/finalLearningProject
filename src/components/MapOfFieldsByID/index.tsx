import { Divider, Tag } from 'antd';
import React, { FC } from 'react';

const MapFieldsByID: FC<IMapFields> = ({ lable, list, title }) => {
  return list ? (
    <>
      <Divider orientation="left">{lable}:</Divider>
      <div>
        {list.map((id, index) => (
          <Tag key={index} color="geekblue">
            {id[title]}
          </Tag>
        ))}
      </div>
    </>
  ) : (
    <div></div>
  );
};

export default MapFieldsByID;
