import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { vehiclesService } from "../../services/vehicles";
import { imgVehiclesList } from "../../utils";

import useStyles from "./style";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { vehiclesReducer } from "../../store/vehicles/reducer";

const { Meta } = Card;

const TeamsVehicles = () => {
  const { vehicles } = useAppSelector((state: any) => state.vehicles);
  const dispatch = useAppDispatch();
  // const [vehiclesList, setVehiclesList] = useState<Vehicles[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();

  // const fetchVehicles = async (nextId: number) => {
  //   setLoading(true);
  //   vehiclesService.getVehicles(nextId).then((data) => {
  //     setVehiclesList(data.results);
  //     setMaxCount(data.count);
  //     setLoading(false);
  //   });
  // };

  const fetchVehicles = createAsyncThunk(
    "vehicles/vehicles",
    async (nextId: number, thunkApi) => {
      try {
        setLoading(true);
        const res = await vehiclesService.getVehicles(nextId);

        // console.log(res);
        thunkApi.dispatch(vehiclesReducer.setVehicles(res.results));
        setMaxCount(res.count);
        setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchVehicles(pageData));
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchVehicles(page);
    setPageData(page);
  };

  if (vehicles.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {vehicles.length && (
          <PaginationCategory
            defaultCurrent={1}
            current={pageData}
            total={maxCount}
            onChange={handleChange}
          />
        )}
      </div>
      <div className={classes.content}>
        {vehicles.map((vehicle: any, index: any) => {
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
