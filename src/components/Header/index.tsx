import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { routerList } from "../../utils";
import { useAppSelector } from "../../store/hooks/redux";

import useStyles from "./style";
import classNames from "classnames";

const { Header: HeaderAnt } = Layout;

const Header = () => {
  const push = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  const { token } = useAppSelector((state) => state.user);

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
            className={classNames({ [classes.changedLog]: !token })}
            defaultSelectedKeys={["/"]}
            selectedKeys={activeList}
            onClick={(path) => push(path.key)}
          >
            {routerList.map((item) => {
              if (token && item.key === "/login") {
                return <Menu.Item key="/login">Log out</Menu.Item>;
              }
              if (item.privat === true && !token) {
                return null;
              }
              return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
            })}
          </Menu>
        </div>
      </HeaderAnt>
    </div>
  );
};

export default Header;
