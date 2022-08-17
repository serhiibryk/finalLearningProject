import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { vehiclesService } from "../../services/vehicles";
import { imgVehiclesList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { vehiclesReducer } from "../../store/vehicles/reducer";

import useStyles from "./style";
import Search from "antd/lib/input/Search";

const { Meta } = Card;

const TeamsVehicles = () => {
  const { vehicles } = useAppSelector((state: any) => state.vehicles);
  // const [vehiclesList, setVehiclesList] = useState<Vehicles[]>([]);
  // const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const location = useLocation();
  const dispatch = useAppDispatch();
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

  const currentPage =
    location.search.split("=")[1] === undefined
      ? 1
      : Number(location.search.split("=")[1]);

  const fetchVehicles = createAsyncThunk(
    "vehicles/vehicles",
    async (nextPage: number, thunkApi) => {
      try {
        const check = nextPage !== 1;
        check && setLoading(true);
        const res = await vehiclesService.getVehicles(nextPage);
        thunkApi.dispatch(vehiclesReducer.setVehicles(res.results));
        setMaxCount(res.count);
        check && setLoading(false);
      } catch (e) {
        return thunkApi.rejectWithValue(e);
      }
    }
  );

  useEffect(() => {
    dispatch(fetchVehicles(currentPage));
  }, [currentPage]);

  const handleChange = (page: number) => {
    fetchVehicles(page);
    // setPageData(page);
    push(`/vehicles?page=${page}`);
  };

  if (vehicles.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div>
          <Search
            className={classes.search}
            placeholder="input name for search"
            // onSearch={onSearch}
            style={{ width: 350 }}
          />
        </div>
        <div className={classes.pagination}>
          {vehicles.length && (
            <PaginationCategory
              defaultCurrent={currentPage}
              current={
                // pageData
                currentPage
              }
              total={maxCount}
              onChange={handleChange}
            />
          )}
        </div>
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
