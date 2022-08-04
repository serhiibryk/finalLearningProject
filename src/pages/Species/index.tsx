import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

import Spiner from "../../components/spiner";
import PaginationCategory from "../../components/pagination";
import { speciesService } from "../../services/species";
import { imgSpeciesList } from "../../utils";

import useStyles from "./style";

const { Meta } = Card;

const TeamsSpecies = () => {
  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [maxCount, setMaxCount] = useState(0);

  const classes = useStyles();
  const push = useNavigate();

  const fetchSpecies = async (nextId: number) => {
    setLoading(true);
    speciesService.getSpecies(nextId).then((res) => {
      setSpeciesList(res.data.results);
      setMaxCount(res.data.count);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchSpecies(pageData);
  }, [pageData]);

  const handleChange = (page: number) => {
    fetchSpecies(page);
    setPageData(page);
  };

  if (speciesList.length === 0 || isLoading) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.pagination}>
        {speciesList.length && (
          <PaginationCategory
            defaultCurrent={1}
            total={maxCount}
            current={pageData}
            onChange={handleChange}
          />
        )}
      </div>
      <div className={classes.content}>
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
                  alt="Speccy wallpaper"
                />
              }
              onClick={() => push(`/species/${speccy.url.split("/")[5]}`)}
            >
              <Meta title={speccy.name} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsSpecies;
