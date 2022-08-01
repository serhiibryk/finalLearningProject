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

  const push = useNavigate();

  const activeList = routerList.map((item) => {
    if (location.pathname === "/" && item.key === "/") return item.key;
    if (item.key !== "/" && location.pathname.includes(item.key))
      return item.key;
    return "";
  });

  return (
    <div className={classes.root}>
      <HeaderAnt>
        <div className={classes.menuWithLogo}>
          <div className={classes.logo}>
            <img
              className={classes.imgLogo}
              src="https://cdn.beahero.gg/2019/06/star-wars-logo_k6qf-620x349.jpg"
              onClick={() => push("/")}
              alt="Logo"
            />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
            selectedKeys={activeList}
            items={routerList}
            onClick={(path) => nav(path.key)}
          />
        </div>
      </HeaderAnt>
    </div>
  );
};

export default Header;
