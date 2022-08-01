import React, { useState } from "react";
import { Pagination } from "antd";

const PaginationCategory: React.FunctionComponent<IPagination> = ({
  defaultCurrent,
  total,
  // change,
  onChange,
}) => {
  // const [currentPage, setCurrentPage] = useState<ICurrentPage>({ id: 1 });

  // const change = (id: number) => {

  //   setCurrentPage(id);
  // console.log(total);
  // console.log(defaultCurrent);

  return (
    <Pagination
      showSizeChanger={false}
      defaultCurrent={defaultCurrent}
      // current={change}
      total={total}
      onChange={onChange}
    />
  );
};

export default PaginationCategory;
