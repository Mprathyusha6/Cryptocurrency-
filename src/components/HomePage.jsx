import React from "react";
import millify from "millify";
import { Loading3QuartersOutlined, MehFilled } from "@ant-design/icons";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import {CryptoCurrencies,News} from '../components';


const { Title } = Typography;
const HomePage = () => {
const { data ,isFetching}=useGetCryptosQuery(10);

const globalStats=data?.data?.stats;
 console.log(data);
if(isFetching) return "Loading....";

  
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats 
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Totla Crypto currency" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Totla Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
       
        <Col span={12}>
          <Statistic title="Totla Market cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Totla 24h volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Totla Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row> 
      <div className="home-heading-container"> 
         <Title level={3} className="home-title">Top 10 Cryptocurrencies in the world</Title>
         <Title level={4} className="show-more"><Link to="/CryptoCurrencies">Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified/>
      <div className="home-heading-container"> 
         <Title level={3} className="home-title">Latest Crypto News</Title>
         <Title level={4} className="show-more"><Link to="/CryptoCurrencies">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  );
};

export default HomePage;
