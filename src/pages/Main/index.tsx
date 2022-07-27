import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { commonService } from "../../services/common";
import { useLocation, useNavigate } from "react-router-dom";
import { imgMainList } from "../../utils";

const { Meta } = Card;

interface Common {
  films: string;
  people: string;
  planets: string;
  species: string;
  starships: string;
  vehicles: string;
}

const Main = () => {
  const [commonList, setCommonList] = useState<Common>({
    films: "",
    people: "",
    planets: "",
    species: "",
    starships: "",
    vehicles: "",
  });
  // console.log(commonList);

  // console.log(useLocation());

  const push = useNavigate();

  const classes = useStyles();

  const fetchCommon = async () => {
    commonService.getCommon().then((res) => {
      // console.log(res);
      setCommonList(res.data);
    });
  };

  // console.log(commonList);

  useEffect(() => {
    fetchCommon();
  }, []);

  if (commonList.films === "") {
    return <div>Loading...</div>;
  }

  // console.log(Object.keys(commonList));

  return (
    <div
      className={classes.mainContainer}
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
