import React from "react";
import { Divider, Card } from "antd";

const { Meta } = Card;

const CardRow: React.FunctionComponent<ICardRow> = ({ lable, title }) => {
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
