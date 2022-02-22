import React, { useState, useEffect } from "react";
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
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (screenSize < 780) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={Icon} size="large" />

        <Typography.Title level={2}>
          <Link to="/">Cryptovers</Link>
        </Typography.Title>
        <button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </button>
      </div>
      {activeMenu && (
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
      )}
    </div>
  );
};
export default Navbar;
