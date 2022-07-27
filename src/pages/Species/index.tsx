import React, { useEffect, useState } from "react";
import { Card } from "antd";

import useStyles from "./style";
import { speciesService } from "../../services/species";
import { useLocation, useNavigate } from "react-router-dom";

const { Meta } = Card;

interface Species {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  films: string[];
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  skin_colors: string;
  url: string;
}

interface PageData {
  size: number;
  page: number;
  pagesTotal: number;
}

const TeamsSpecies = () => {
  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [pageData, setPageData] = useState<PageData>({
    size: 100,
    page: 1,
    pagesTotal: 0,
  });
  const classes = useStyles();
  const push = useNavigate();
  // const location = useLocation();
  const fetchSpecies = async (size: number, page: number) => {
    speciesService.getSpecies().then((res) => {
      console.log(res);
      setSpeciesList(res.data.results);
      // setPageData({
      //   size: res.data.info.results,
      //   page: res.data.info.page,
      //   pagesTotal: 100, // imagine that it`s value from BE
      // });
    });
  };
  useEffect(() => {
    fetchSpecies(pageData.size, pageData.page);
  }, []);

  if (speciesList.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.speciesContainer}>
      {speciesList.map((speccy) => {
        return (
          <Card
            className={classes.card}
            hoverable
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
