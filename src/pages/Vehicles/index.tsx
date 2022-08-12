import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { vehiclesService } from "../../services/vehicles";
import { imgVehiclesList } from "../../utils";

import useStyles from "./style";

const { Meta } = Card;

const TeamsVehicles = () => {
  const [vehiclesList, setVehiclesList] = useState<Vehicles[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();
  const fetchVehicles = async (nextId: number) => {
    setLoading(true);
    vehiclesService.getVehicles(nextId).then((res) => {
      setVehiclesList(res.data.results);
      setMaxCount(res.data.count);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchVehicles(pageData);
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchVehicles(page);
    setPageData(page);
  };

  if (vehiclesList.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {vehiclesList.length && (
          <PaginationCategory
            defaultCurrent={1}
            current={pageData}
            total={maxCount}
            onChange={handleChange}
          />
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
                  alt="Vehicle wallpaper"
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
