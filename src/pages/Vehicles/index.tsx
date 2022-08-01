import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/spiner";
import PaginationCategory from "../../components/pagination";
import { vehiclesService } from "../../services/vehicles";
import { imgVehiclesList } from "../../utils";

import useStyles from "./style";

const { Meta } = Card;

const TeamsVehicles = () => {
  const [vehiclesList, setVehiclesList] = useState<Vehicles[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });
  const [isLoading, setLoading] = useState(false);

  const classes = useStyles();
  const push = useNavigate();
  const fetchVehicles = async (nextId: number) => {
    setLoading(true);
    vehiclesService.getVehicles(nextId).then((res) => {
      setVehiclesList(res.data.results);
      setLoading(false);
      const paramsNext = new URL(res.data.next).searchParams;
      const next = paramsNext.get("page");
      setPageData({ nextId: Number(next) });
    });
  };
  useEffect(() => {
    fetchVehicles(pageData.nextId);
  }, []);

  const handleChange = (id: number) => {
    fetchVehicles(id);
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
            total={37}
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
