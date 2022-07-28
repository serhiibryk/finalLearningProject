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

  // console.log(
  //   !!routerList.find((item) => {
  //     console.log("item", item);

  //     return item.key === location.pathname;
  //   })
  // );

  const push = useNavigate();

  return (
    <div className={classes.root}>
      <HeaderAnt>
        <div className={classes.menuWithLogo}>
          <div className={classes.logo}>
            <img
              className={classes.imgLogo}
              src="https://cdn.beahero.gg/2019/06/star-wars-logo_k6qf-620x349.jpg"
              onClick={() => push("/")}
            />
          </div>
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
        </div>
      </HeaderAnt>
    </div>
  );
};

export default Header;
