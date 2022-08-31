import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from 'antd';

import Spiner from '../../components/Spiner';
import PaginationCategory from '../../components/Pagination';
import { imgSpeciesList } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import Search from '../../components/Search';
import { getSpecy } from '../../store/specy/actions';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import useStyles from './style';

const { Meta } = Card;

const TeamsSpecies = () => {
  const { specy, count, isLoading, error } = useAppSelector((state) => state.specy);
  const [nameSpecies, setNameSpecies] = useState<any>([]);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const classes = useStyles();
  const push = useNavigate();

  const currentPage = Number(location.search.split('=')[1] || 1);

  useEffect(() => {
    dispatch(getSpecy(currentPage));
  }, [currentPage, dispatch]);

  const handleChange = (page: number) => {
    push(`/species?page=${page}`);
  };

  if (isLoading) {
    return <Spiner />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  // dnd
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    setNameSpecies(reorder(nameSpecies, result.source.index, result.destination.index));
  };

  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.topOfPage}>
          <span className={classes.text}>You can drag elements on this page</span>
          <div>
            <Search category={'specy'} name={'name'} setSearchState={setNameSpecies} />
          </div>

          <div className={classes.pagination}>
            {specy && (
              <PaginationCategory
                defaultCurrent={currentPage}
                total={count}
                current={currentPage}
                onChange={handleChange}
              />
            )}
          </div>
        </div>
        <Droppable droppableId={'droppable'}>
          {(provided) => (
            <div className={classes.content} {...provided.droppableProps} ref={provided.innerRef}>
              {nameSpecies.map((speccy: any, index: any) => (
                <Draggable key={index} draggableId={String(index++)} index={index}>
                  {(provided) => (
                    <div
                      className={classes.items}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        className={classes.card}
                        hoverable
                        cover={
                          <img
                            className={classes.img}
                            key={imgSpeciesList[index].imgLink}
                            src={imgSpeciesList[index].imgLink}
                            alt={'Speccy wallpaper'}
                          />
                        }
                        onClick={() => push(`/species/${speccy.url.split('/')[5]}`)}
                      >
                        <Meta title={speccy.name} />
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TeamsSpecies;
