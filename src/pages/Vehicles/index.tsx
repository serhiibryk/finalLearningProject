import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { imgVehiclesList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import Search from "../../components/Search";
import { getVehicles } from "../../store/vehicles/actions";

import useStyles from "./style";

const { Meta } = Card;

const TeamsVehicles = () => {
  const { vehicles, count, isLoading, error } = useAppSelector(
    (state) => state.vehicles
  );
  // const [vehiclesList, setVehiclesList] = useState<Vehicles[]>([]);
  // const [pageData, setPageData] = useState(1);
  // const [isLoading, setLoading] = useState(false);
  // const [maxCount, setMaxCount] = useState(0);
  const [nameVehicles, setNameVehicles] = useState([]);

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

  const currentPage = Number(location.search.split("=")[1] || 1);

  // const fetchVehicles = createAsyncThunk(
  //   "vehicles/vehicles",
  //   async (nextPage: number, thunkApi) => {
  //     try {
  //       const check = nextPage !== 1;
  //       check && setLoading(true);
  //       const res = await vehiclesService.getVehicles(nextPage);
  //       thunkApi.dispatch(vehiclesReducer.setVehicles(res.results));
  //       setMaxCount(res.count);
  //       check && setLoading(false);
  //     } catch (e) {
  //       return thunkApi.rejectWithValue(e);
  //     }
  //   }
  // );

  useEffect(() => {
    dispatch(getVehicles(currentPage));
  }, [currentPage]);

  const handleChange = (page: number) => {
    // fetchVehicles(page);
    // setPageData(page);
    push(`/vehicles?page=${page}`);
  };

  if (isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div>
          <Search
            category={"vehicles"}
            name={"name"}
            setSearchState={setNameVehicles}
          />
        </div>
        <div className={classes.pagination}>
          {vehicles && (
            <PaginationCategory
              defaultCurrent={currentPage}
              current={
                // pageData
                currentPage
              }
              total={count}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      <div className={classes.content}>
        {nameVehicles.map((vehicle: any, index: any) => {
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
