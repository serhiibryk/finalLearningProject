import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { vehiclesService } from "../../services/vehicles";
import { useNavigate } from "react-router-dom";
import { imgVehiclesList } from "../../utils";

const { Meta } = Card;

const TeamsVehicles = () => {
  const [vehiclesList, setVehiclesList] = useState<Vehicles[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    size: 100,
    page: 1,
    pagesTotal: 0,
  });
  const classes = useStyles();
  const push = useNavigate();
  const fetchVehicles = async (size: number, page: number) => {
    vehiclesService.getVehicles().then((res) => {
      // console.log(res);
      setVehiclesList(res.data.results);
      // setPageData({
      //   size: res.data.info.results,
      //   page: res.data.info.page,
      //   pagesTotal: 100, // imagine that it`s value from BE
      // });
    });
  };
  useEffect(() => {
    fetchVehicles(pageData.size, pageData.page);
  }, []);

  if (vehiclesList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
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
  );
};

export default TeamsVehicles;
