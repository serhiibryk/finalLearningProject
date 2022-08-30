import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/Spiner";
import { commonService } from "../../services/common";
import { imgMainList } from "../../utils";

import useStyles from "./style";

const { Meta } = Card;

const Main = () => {
  const [mainList, setMainList] = useState<Common>({
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
    commonService.getCommon().then((data) => {
      setMainList(data);
    });
  };

  useEffect(() => {
    fetchCommon();
  }, []);

  if (mainList.films === "") {
    return <Spiner />;
  }

  return (
    <div className={classes.root}>
      {Object.entries(mainList).map((item, index) => (
        <Card
          key={index}
          hoverable
          className={classes.card}
          cover={
            <img
              className={classes.img}
              key={imgMainList[index].imgLink}
              src={imgMainList[index].imgLink}
              alt="Category wallpaper"
            />
          }
          onClick={() => push(`/${item[0]}`)}
        >
          <Meta title={item[0].toUpperCase()} />
        </Card>
      ))}
    </div>
  );
};

export default Main;
