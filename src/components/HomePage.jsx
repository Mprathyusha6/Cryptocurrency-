import React from "react";
import millify from "millify";
import { Loading3QuartersOutlined, MehFilled } from "@ant-design/icons";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading....";

  console.log("Home", data);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Totla Crypto currency" value={2} />
        </Col>
        <Col span={12}>
          <Statistic title="Totla Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Totla Market cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Totla 24h volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Totla Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
