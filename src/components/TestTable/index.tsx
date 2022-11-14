import React, { FC, useEffect, useState } from 'react';
import { Dropdown, Table, TablePaginationConfig } from 'antd';
import { columnForTable } from './column';
import { useTranslation } from 'react-i18next';
import { dataService } from '../../services/testRes';
import { OrderedListOutlined } from '@ant-design/icons';

const TestTable: FC<ITestForm> = () => {
  const { t } = useTranslation();
  const [carsData, setCarsData] = useState<any>([]);
  const [tableParams, setTableParams] = useState<any>({
    pagination: {
      current: 1,
      pageSize: 2,
    },
  });

  const data: DataType[] = [
    {
      title: 'Car create Year',
      key: '1',
      dataIndex: 'Vav1',
      render: (_, carsData, index) => <p key={index}>{carsData.createYear}</p>,
    },
    {
      title: 'Seats number',
      key: '1',
      dataIndex: 'Vav1',
      render: (_, carsData, index) => <p key={index}>{carsData.seats}</p>,
    },
    {
      title: 'Engine',
      key: '1',
      dataIndex: 'Vav1',
      render: (_, carsData, index) => (
        <>
          <OrderedListOutlined />
          <Dropdown
            key={index}
            trigger={['click']}
            overlay={
              <div
                style={{
                  backgroundColor: 'grey',
                  // color: '',
                  border: '1px solid black',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <a>1.modelId: {carsData.engine.modelId}</a>
                <a>2.modelName:{carsData.engine.modelName}</a>
                <a>3.wasteCity:{carsData.engine.wasteCity}</a>
              </div>
            }
          >
            <div style={{ textDecoration: 'underline' }}>values</div>
          </Dropdown>
        </>
      ),
    },
  ];

  const column = columnForTable(data);
  const infoOfPage = {
    page: 2,
    pageSize: 2,
    searchTerm: '',
    dir: 'descend',
    ordering: 'createdAt',
  };
  const pageInfo = {
    filters: [],
  };

  //   //1 example
  //   var p1 = Promise.resolve(3);
  //   var p2 = 1337;
  //   var p3 = new Promise((resolve, reject) => {
  //     setTimeout(resolve, 100, 'foo');
  //   });
  //   Promise.all([p1, p2, p3])
  //     .then((values) => {
  //       console.log(values);
  //     })
  //     .catch((e) => console.log(e));
  //   //-----------------------
  //   //2 example
  //   (async () => {
  //     const res = await Promise.all([[p1, p2, p3]]);
  //     // res = values
  //   })();
  //   //------------------
  //   //3 example
  //   (async () => {
  //     try {
  //       const res = await Promise.all([[p1, p2, p3]]);
  //     } catch (error) {
  //       console.log('error');
  //     }
  //   })();
  // //----------------------------

  // console.log(carsData);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({ pagination });
  };

  useEffect(() => {
    (async () => {
      const res = await dataService.getPostDataCars(infoOfPage, pageInfo);
      setCarsData(res.cars);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: 4,
        },
      });
      console.log(tableParams);
    })();
  }, []);

  return (
    <>
      <Table columns={column} dataSource={carsData} onChange={handleTableChange} pagination={tableParams.pagination} />
    </>
  );
};

export default TestTable;
