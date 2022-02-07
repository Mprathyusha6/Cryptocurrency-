import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Icon from "../images/cryptocurrency.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={Icon} size="large" />

        <Typography.Title level={2}>
          <Link to="/">Cryptovers</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FundOutlined />}>
          <Link to="/CryptoCurrencies">cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
          <Link to="/Exchanges">Exchanges</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<BulbOutlined />}>
          <Link to="/News">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Navbar;
