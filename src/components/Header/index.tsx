import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { routerList } from "../../utils";

const { Header: HeaderAnt } = Layout;

const Header = () => {
  const nav = useNavigate();
  return (
    <HeaderAnt>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        items={routerList}
        onClick={(path) => nav(path.key)}
      />
    </HeaderAnt>
  );
};

export default Header;
