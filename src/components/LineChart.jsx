import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
// import {CategoryScale} from 'chart.js'; 
 

 
const { Title } = Typography;
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
   
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }
 
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  console.log(data);
  console.log(options);
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price chart
          <Col className="price-container">
            <Title level={5} className="price-charge">
              {coinHistory?.data?.change}%
            </Title>
            <Title level={5} className="current-price">
              Current {coinName} Price :$ {currentPrice}
            </Title>
          </Col>
        </Title>
      </Row>
      {/* <Line data={data} options={options} /> */}
    </>
  );
};
export default LineChart;