import React from "react";
import { Pagination } from "antd";

const PaginationCategory: React.FunctionComponent<IPagination> = ({
  defaultCurrent,
  total,
  current,
  onChange,
}) => {
  return (
    <Pagination
      showSizeChanger={false}
      defaultCurrent={defaultCurrent}
      current={current}
      total={total}
      onChange={onChange}
    />
  );
};

export default PaginationCategory;
