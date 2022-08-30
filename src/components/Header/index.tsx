import { useMemo, useState } from "react";
import { Button, Layout, Menu, Modal } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import { routerList } from "../../utils";
import { useAppSelector } from "../../store/hooks/redux";

import useStyles from "./style";
import { MenuOutlined } from "@ant-design/icons";

const { Header: HeaderAnt } = Layout;

const Header = () => {
  const push = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  const { token } = useAppSelector((state) => state.user);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChangeView = (value: boolean) => {
    setIsModalVisible(value);
  };

  const handleClickLogin = () => {
    push("/login");
    handleChangeView(false);
  };

  const handleClick = (item: string) => {
    push(item);
    handleChangeView(false);
  };

  const activeList = useMemo(() => {
    return routerList.map((item) => {
      if (location.pathname === "/" && item.key === "/") return item.key;
      if (item.key !== "/" && location.pathname.includes(item.key))
        return item.key;
      return "";
    });
  }, [location.pathname]);
  // const menu = (
  //   <Menu
  //     selectable
  //     selectedKeys={activeList}
  //     onClick={(path) => {
  //       push(path.key);
  //     }}
  //     items={[
  //       ...routerList.map((item) => {
  //         if (token && item.key === "/login") {
  //           return {
  //             key: "/login",
  //             label: "Log out",
  //           };
  //         }
  //         if (item.privat === true && !token) {
  //           return null;
  //         }
  //         return {
  //           key: item.key,
  //           label: item.label,
  //         };
  //       }),
  //     ]}
  //   />
  // );

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
          {/* <Dropdown
            overlay={menu}
            className={classes.dropmenu}
            // visible={true}
            overlayClassName={classes.overlay}
          >
            <Typography.Link>
              <Space className={classes.menuDropText}>MENU</Space>
            </Typography.Link>
          </Dropdown> */}
          <Button
            className={classes.modalShowButton}
            type="primary"
            onClick={() => handleChangeView(true)}
          >
            <MenuOutlined className={classes.menuOutlined} />
          </Button>
          <Modal
            afterClose={() => handleChangeView(false)}
            className={classes.modal}
            title="MENU"
            footer={null}
            visible={isModalVisible}
            onCancel={() => handleChangeView(false)}
            width={"100%"}
            wrapClassName={classes.wrap}
          >
            <div>
              {routerList.map((item, index) => {
                if (token && item.key === "/login") {
                  return (
                    <p
                      key={index}
                      className={classes.modalText}
                      onClick={handleClickLogin}
                    >
                      Log out
                    </p>
                  );
                }

                if (item.privat === true && !token) {
                  return null;
                }
                return (
                  <p
                    key={index}
                    className={classes.modalText}
                    onClick={() => handleClick(item.key)}
                  >
                    {item.label}
                  </p>
                );
              })}
            </div>
          </Modal>
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
