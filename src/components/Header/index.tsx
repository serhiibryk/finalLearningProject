import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import { routerList } from "../../utils";

import useStyles from "./style";

const { Header: HeaderAnt } = Layout;

const Header = () => {
  const nav = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  console.log(routerList);

  console.log(
    !!routerList.find((item) => {
      console.log("item", item);

      return item.key === location.pathname;
    })
  );

  return (
    <div className={classes.root}>
      <HeaderAnt>
        <Menu
          className={classNames({
            show: !!routerList.find((item) => item.key === location.pathname),
          })}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
          items={routerList}
          onClick={(path) => nav(path.key)}
        />
      </HeaderAnt>
    </div>
  );
};

export default Header;
