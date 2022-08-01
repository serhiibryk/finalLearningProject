import React from "react";
import { Divider, Card } from "antd";

const { Meta } = Card;

const CardRow: React.FunctionComponent<ICardRow> = ({ lable, title }) => {
  // console.log(lable);
  // console.log(title.length);

  return (
    title.length && (
      <>
        <Divider orientation="left">{lable}</Divider>
        <Meta title={title} />
      </>
    )
  );
};

export default CardRow;
