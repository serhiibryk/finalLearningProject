import { Divider, Tag } from 'antd';
import React, { FC } from 'react';

const MapFieldsByID: FC<IMapFields> = ({ lable, list, title }) => {
  return list ? (
    <>
      <Divider orientation={'left'}>{lable}:</Divider>
      <div>
        {list.map((item, index) => (
          <Tag key={index} color={'geekblue'}>
            {item[title as keyof object]}
          </Tag>
        ))}
      </div>
    </>
  ) : (
    <div></div>
  );
};

export default MapFieldsByID;
