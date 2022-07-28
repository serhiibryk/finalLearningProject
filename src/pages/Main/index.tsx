import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { commonService } from "../../services/common";
import { useLocation, useNavigate } from "react-router-dom";
import { imgMainList } from "../../utils";

const { Meta } = Card;

const Main = () => {
  const [commonList, setCommonList] = useState<Common>({
    films: "",
    people: "",
    planets: "",
    species: "",
    starships: "",
    vehicles: "",
  });

  const push = useNavigate();

  const classes = useStyles();

  const fetchCommon = async () => {
    commonService.getCommon().then((res) => {
      setCommonList(res.data);
    });
  };

  useEffect(() => {
    fetchCommon();
  }, []);

  if (commonList.films === "") {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={classes.root}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {Object.entries(commonList).map((item, index) => (
        <Card
          hoverable
          className={classes.card}
          cover={
            <img
              className={classes.img}
              key={imgMainList[index].imgLink}
              src={imgMainList[index].imgLink}
            />
          }
          onClick={() => push(`/${item[0]}`)}
        >
          <Meta className={classes.meta} title={item[0]} />
        </Card>
      ))}
    </div>
  );
};

export default Main;
