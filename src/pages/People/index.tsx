import React, { useEffect, useState } from "react";
import { Card, Pagination, Space, Spin } from "antd";

import useStyles from "./style";
import { peopleService } from "../../services/people";
import { useLocation, useNavigate } from "react-router-dom";
import { imgPeopleList } from "../../utils";

const { Meta } = Card;

const TeamsPeoples = () => {
  const [peoplesList, setPeoplesList] = useState<People[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });

  const classes = useStyles();
  const push = useNavigate();
  const location = useLocation();

  const fetchPeople = async (nextId: number) => {
    peopleService.getPeople(nextId).then((res) => {
      setPeoplesList(res.data.results);
      const params = new URL(res.data.next).searchParams;
      const next = params.get("page");
      setPageData({ nextId: Number(next) });
    });
  };

  useEffect(() => {
    fetchPeople(pageData.nextId);
  }, []);

  const handleChange = (id: number) => {
    fetchPeople(id);
  };

  if (peoplesList.length === 0) {
    return (
      <Space size="middle" className={classes.spiner}>
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {!!peoplesList.length && (
          <div>
            <Pagination
              showSizeChanger={false}
              defaultCurrent={1}
              total={82}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className={classes.content}>
        {peoplesList.map((people, index) => {
          return (
            <Card
              className={classes.card}
              hoverable
              cover={
                <img
                  className={classes.img}
                  key={imgPeopleList[index].imgLink}
                  src={imgPeopleList[index].imgLink}
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
function useHistory(): jest.It {
  throw new Error("Function not implemented.");
}
