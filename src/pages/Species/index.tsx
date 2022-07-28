import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { speciesService } from "../../services/species";
import { useLocation, useNavigate } from "react-router-dom";
import { imgSpeciesList } from "../../utils";

const { Meta } = Card;

const TeamsSpecies = () => {
  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    size: 100,
    page: 1,
    pagesTotal: 0,
  });
  const classes = useStyles();
  const push = useNavigate();

  const fetchSpecies = async (size: number, page: number) => {
    speciesService.getSpecies().then((res) => {
      setSpeciesList(res.data.results);
    });
  };
  useEffect(() => {
    fetchSpecies(pageData.size, pageData.page);
  }, []);

  if (speciesList.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.root}>
      {speciesList.map((speccy, index) => {
        return (
          <Card
            className={classes.card}
            hoverable
            cover={
              <img
                className={classes.img}
                key={imgSpeciesList[index].imgLink}
                src={imgSpeciesList[index].imgLink}
              />
            }
            onClick={() => push(`/species/${speccy.url.split("/")[5]}`)}
          >
            <Meta title={speccy.name} />
          </Card>
        );
      })}
    </div>
  );
};

export default TeamsSpecies;
