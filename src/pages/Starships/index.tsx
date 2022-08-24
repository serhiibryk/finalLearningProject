import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { imgStarshipsList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import Search from "../../components/Search";
import { getStarships } from "../../store/starships/actions";

import useStyles from "./style";

const { Meta } = Card;

const TeamsStarships = () => {
  const { starships, count, isLoading, error } = useAppSelector(
    (state) => state.starships
  );
  // const [isLoading, setLoading] = useState(false);
  // const [maxCount, setMaxCount] = useState(0);
  const [nameStarships, setNameStarships] = useState([]);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage = Number(location.search.split("=")[1] || 1);

  // const fetchStarships = createAsyncThunk(
  //   "starships/starships",
  //   async (nextPage: number, thunkApi) => {
  //     try {
  //       setLoading(true);
  //       const res = await starshipsService.getStarships(nextPage);
  //       thunkApi.dispatch(starshipsReducer.setStarships(res.results));
  //       setMaxCount(res.count);
  //       setLoading(false);
  //     } catch (e) {
  //       return thunkApi.rejectWithValue(e);
  //     }
  //   }
  // );

  useEffect(() => {
    dispatch(getStarships(currentPage));
  }, [currentPage, dispatch]);

  const handleChange = (page: number) => {
    // fetchStarships(page);
    push(`/starships?page=${page}`);
  };

  if (isLoading) {
    return <Spiner />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div>
          <Search
            category={"starships"}
            name={"name"}
            setSearchState={setNameStarships}
          />
        </div>
        <div className={classes.pagination}>
          {starships && (
            <PaginationCategory
              defaultCurrent={currentPage}
              current={currentPage}
              total={count}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      <div className={classes.content}>
        {nameStarships.map((starship: any, index: any) => {
          return (
            <Card
              key={index}
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgStarshipsList[index].imgLink}
                  src={imgStarshipsList[index].imgLink}
                  alt="Starship wallpaper"
                />
              }
              onClick={() => push(`/starships/${starship.url.split("/")[5]}`)}
            >
              <Meta title={starship.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsStarships;
