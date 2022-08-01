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
  const [pageData, setPageData] = useState<PageData>({
    nextId: 1,
  });
  const [isLoading, setLoading] = useState(false);

  const classes = useStyles();
  const push = useNavigate();

  const fetchSpecies = async (nextId: number) => {
    setLoading(true);
    speciesService.getSpecies(nextId).then((res) => {
      setSpeciesList(res.data.results);
      setLoading(false);
      const paramsNext = new URL(res.data.next).searchParams;
      const next = paramsNext.get("page");
      setPageData({ nextId: Number(next) });
    });
  };

  useEffect(() => {
    fetchSpecies(pageData.nextId);
  }, []);

  const handleChange = (id: number) => {
    fetchSpecies(id);
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
            total={37}
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
