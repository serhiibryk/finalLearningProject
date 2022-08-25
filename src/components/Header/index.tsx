import { Dropdown, Layout, Menu, Space, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { routerList } from "../../utils";
import { useAppSelector } from "../../store/hooks/redux";

import useStyles from "./style";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const menu = (
    <Menu
      selectable
      // defaultSelectedKeys={["3"]}
      selectedKeys={activeList}
      onClick={(path) => {
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
  );

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
          <Dropdown overlay={menu} className={classes.dropmenu}>
            <Typography.Link>
              <Space className={classes.menuDropText}>MENU</Space>
            </Typography.Link>
          </Dropdown>
          <Menu
            theme="dark"
            className={classNames(
              { [classes.changedLog]: !token },
              classes.menu
            )}
            selectedKeys={activeList}
            onClick={(path) => {
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
