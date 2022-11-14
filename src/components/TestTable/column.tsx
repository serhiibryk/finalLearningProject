import React from 'react';
import { Tag } from 'antd';

export const columnForTable = (
  // t: (a: string) => string,
  data: DataType[]
) => {
  return [
    {
      title: 'Car name',
      key: '1',
      dataIndex: 'dataIndx1',
      render: (_: any, carsData: any, index: number) => (
        <>
          <p key={index}>{carsData.name}</p>
        </>
      ),
    },
    {
      title: 'Car price',
      key: '2',
      dataIndex: 'dataIndx2',
      render: (_: any, carsData: any, index: number) => <p key={index}>{carsData.price + ' ' + carsData.currency}</p>,
    },
    {
      title: 'Car transmission',
      key: '2',
      dataIndex: 'dataIndx2',
      render: (_: any, carsData: any, index: number) => <p key={index}>{carsData.transmission.transmission}</p>,
    },
    {
      title: 'Car bodyType',
      key: '2',
      dataIndex: 'dataIndx2',
      render: (_: any, carsData: any, index: number) => <p key={index}>{carsData.bodyType.body}</p>,
    },
    ...data,
  ];
};
