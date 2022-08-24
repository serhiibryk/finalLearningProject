import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import PaginationCategory from "../../components/Pagination";
import { imgPeopleList } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import Search from "../../components/Search";

import useStyles from "./style";
import { getPeoples } from "../../store/people/actions";

const { Meta } = Card;

const TeamsPeoples: FC = () => {
  const { people, count, isLoading, error } = useAppSelector(
    (state) => state.people
  );
  // const [isLoading, setLoading] = useState(false);
  // const [maxCount, setMaxCount] = useState(0);
  const [namePeople, setNamePeople] = useState([]);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage = Number(location.search.split("=")[1] || 1);

  // const fetchPeople = createAsyncThunk(
  //   "people/people",
  //   async (nextPage: number, thunkApi) => {
  //     try {
  //       setLoading(true);
  //       const res = await peopleService.getPeople(nextPage);
  //       thunkApi.dispatch(peopleReducer.setPeople(res.results));
  //       setMaxCount(res.count);
  //       // setLoading(false);
  //     } catch (e) {
  //       return thunkApi.rejectWithValue(e);
  //     }
  //   }
  // );

  useEffect(() => {
    dispatch(getPeoples(currentPage));
  }, [dispatch, currentPage]);

  const handleChange = (page: number) => {
    // fetchPeople(page);
    push(`/people?page=${page}`);
  };

  // const debouncedSearch = debounce((value) => {
  //   const filter = (people || []).filter((item: any) =>
  //     item.name.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setNamePeople(filter);
  // }, 1000);

  // const handleSearch = (e: any) => {
  //   debouncedSearch(e.target.value);
  // };

  // useEffect(() => {
  //   setNamePeople(people);
  // }, [people]);

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
            category={"people"}
            name={"name"}
            setSearchState={setNamePeople}
          />
        </div>
        <div className={classes.pagination}>
          {people && (
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
        {namePeople.map((people: any, index: any) => {
          return (
            <Card
              key={index}
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgPeopleList[index].imgLink}
                  src={imgPeopleList[index].imgLink}
                  alt="People wallpaper"
                />
              }
              onClick={() => push(`/people/${people.url.split("/")[5]}`)}
            >
              <Meta title={people.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsPeoples;
