import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { routerList } from "../../utils";
import { useAppSelector } from "../../store/hooks/redux";

import useStyles from "./style";
import classNames from "classnames";
import { useMemo } from "react";

const { Header: HeaderAnt } = Layout;

const Header = () => {
  const push = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  const { token } = useAppSelector((state) => state.user);

  const activeList = useMemo(() => {
    return routerList.map((item) => {
      if (location.pathname === "/" && item.key === "/") return item.key;
      if (item.key !== "/" && location.pathname.includes(item.key))
        return item.key;
      return "";
    });
  }, [location.pathname]);

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
            selectedKeys={activeList}
            onClick={(path) => {
              // console.warn(path);
              push(path.key);
            }}
            items={[
              ...routerList.map((item) => {
                if (token && item.key === "/login") {
                  return {
                    key: "/login",
                    label: "Log out",
                  };
                }
                if (item.privat === true && !token) {
                  return null;
                }
                return {
                  key: item.key,
                  label: item.label,
                };
              }),
            ]}
          />
        </div>
      </HeaderAnt>
    </div>
  );
};

export default Header;
