import React, { useEffect, useState } from "react";
import { Card, Pagination, Space, Spin } from "antd";

import useStyles from "./style";
import { vehiclesService } from "../../services/vehicles";
import { useNavigate } from "react-router-dom";
import { imgVehiclesList } from "../../utils";

const { Meta } = Card;

const TeamsVehicles = () => {
  const [vehiclesList, setVehiclesList] = useState<Vehicles[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });

  const classes = useStyles();
  const push = useNavigate();
  const fetchVehicles = async (nextId: number) => {
    vehiclesService.getVehicles(nextId).then((res) => {
      setVehiclesList(res.data.results);
      const paramsNext = new URL(res.data.next).searchParams;
      const next = paramsNext.get("page");
      // const paramsPrev = new URL(res.data.previous).searchParams;
      // const prev = paramsNext.get("page");
      setPageData({ nextId: Number(next) });
    });
  };
  useEffect(() => {
    fetchVehicles(pageData.nextId);
  }, []);

  const handleChange = (id: number) => {
    fetchVehicles(id);
  };

  if (vehiclesList.length === 0) {
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {!!vehiclesList.length && (
          <div className={classes.content}>
            <Pagination
              showSizeChanger={false}
              defaultCurrent={1}
              total={37}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className={classes.content}>
        {vehiclesList.map((vehicle, index) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgVehiclesList[index].imgLink}
                  src={imgVehiclesList[index].imgLink}
                />
              }
              onClick={() => push(`/vehicles/${vehicle.url.split("/")[5]}`)}
            >
              <Meta title={vehicle.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsVehicles;
