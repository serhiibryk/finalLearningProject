import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Switch } from 'antd';

import Spiner from '../../components/Spiner';
import { imgPlanetsList, mainError } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import Search from '../../components/Search';
import PaginationCategory from '../../components/Pagination';
import { getNextPlanets, getPlanets } from '../../store/planets/actions';

import useStyles from './style';

const { Meta } = Card;

const TeamsPlanets = () => {
  const { planets, count, isLoading, error } = useAppSelector((state) => state.planets);
  const { stateForScroll } = useAppSelector((state: any) => state.stateForScroll);
  const [numberPage, setNumberPage] = useState(2);
  const [switcher, setSwitcher] = useState<any>([]);
  const [checked, setChecked] = useState(false);

  const dispatch = useAppDispatch();
  const classes = useStyles();
  const push = useNavigate();
  const location = useLocation();

  const currentPage = location.search.split('=')[1] === undefined ? 1 : Number(location.search.split('=')[1]);

  useEffect(() => {
    dispatch(getPlanets(currentPage));
  }, [currentPage, dispatch]);

  // const fetchNextPlanets = createAsyncThunk(
  //   "planets/NextPlanets",

  //   async (id: number, thunkApi) => {
  //     try {
  //       const res = await planetsService.getPlanets(id);
  //       thunkApi.dispatch(
  //         infiniteScrollReducer.setForScroll(stateForScroll.concat(res.results))
  //       );
  //       dispatch(getPlanets(count)); ///
  //       // setMaxCount(count);
  //     } catch (e) {
  //       return thunkApi.rejectWithValue(e);
  //     }
  //   }
  // );

  useEffect(() => {
    checked && dispatch(getNextPlanets(1));
  }, [checked, dispatch]);

  useEffect(() => {
    setSwitcher(stateForScroll);
  }, [stateForScroll]);

  const handleChange = (page: number) => {
    push(`/planets?page=${page}`);
  };

  if (isLoading) {
    return <Spiner />;
  }

  if (error) {
    return <p>{mainError}</p>;
  }

  const hasMore = () => {
    return stateForScroll.length < count;
  };

  const checkForScroll = (check: boolean) => {
    setChecked(check);
    if (!check) {
      setSwitcher(planets);
    } else {
      setSwitcher(stateForScroll);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.topOfPage}>
        <div className={classes.textAndSwitch}>
          <span className={classes.text}>You can switch between pagination and infinitescroll</span>
          <div>
            <Switch className={classes.switch} checked={checked} onChange={checkForScroll} />
          </div>
        </div>
        <div className={classes.searchAndPagination}>
          <div>
            <Search category={'planets'} name={'name'} setSearchState={setSwitcher} />
          </div>
          {!checked ? (
            <div className={classes.pagination}>
              {planets.length && (
                <PaginationCategory
                  defaultCurrent={currentPage}
                  total={count}
                  current={currentPage}
                  onChange={handleChange}
                />
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div className={classes.contentScroll}>
        <InfiniteScroll
          dataLength={stateForScroll.length}
          next={() => {
            dispatch(getNextPlanets(numberPage));
            setNumberPage(numberPage + 1);
          }}
          hasMore={checked && hasMore()}
          loader={<h4>Loading...</h4>}
        >
          {switcher.map((planet: Planets, index: number) => {
            return (
              <Card
                key={index}
                className={classes.card}
                hoverable
                cover={
                  <img
                    className={classes.img}
                    // key={imgPlanetsList.imgLink}
                    src={imgPlanetsList[1].imgLink}
                    alt={'Planet wallpaper'}
                  />
                }
                onClick={() => push(`/planets/${planet.url.split('/')[5]}`)}
              >
                <Meta title={planet.name} />
              </Card>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default TeamsPlanets;
