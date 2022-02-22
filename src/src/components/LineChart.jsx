import React from 'react'
import {Line} from 'react-chartjs-2';
import {Col,Row,Typography} from 'antd';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; Chart.register(CategoryScale)

const {Title}=Typography;
 
 const LineChart = ({coinHistory,currentPrice,coinName}) => {
   const coinPrice=[];
   const coinTimestamp=[];
 
  console.log("History",coinHistory); 
   for(let i=0; i<coinHistory?.data?.history?.length;i++){
     coinPrice.push(coinHistory?.data?.history[i].price)
     coinTimestamp.push(coinHistory?.data?.history[i].timestamp)
   }
   console.log(coinPrice)
   console.log(coinTimestamp)
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };
//  const data= {
//     labels: coinTimestamp,
//     datasets: [
//                  {
//                     label: '911',
//                     lineTension: 0,
//                     fill: false,
//                     borderColor: '#4cfbb3', // (random) 
//                     data: coinPrice
//                  }
//               ]
//   }
//  console.log(data )
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

//  const options= {
//     type:'line',
//     data:{
//       labels:[],
//       datasets:[]
//     },
//     options:{
//       legend: {
//         display: true,
//         position: 'top',
//         fontColor: 'white',
//         fontSize: 20,
//         labels: {
//           fontColor: 'white',
//           fontSize: 20
//         }
//       },
//       responsive: true,
//       scales: {
//         yAxes: [{
//           stacked: false,
//           scaleLabel: {
//             display: true,
//             fontColor: 'white',
//             fontSize: 25,
//             labelString: 'Faction Points'
//           },
//           ticks: {
//             fontColor: 'white',
//             fontSize: 20,
//             min: 0
//           }
//         }],
//       xAxes: [{
//         stacked: false,
//         scaleLabel: {
//           display: true,
//           fontColor: 'white',
//           fontSize: 25,
//           labelString: 'Day'
//         },
//         ticks: {
//           fontColor: 'white',
//           fontSize: 20,
//           min: 0
//         }
//       }]
//       }
//     }
//   }
console.log(options )
  
  return (
    <div>
      <Row className='chart-header'>
      <Title level={2} className='chart-title'>{coinName} Price chart</Title>
     <Col className='price-container'>
        <Title level={5} className='price-change' >{coinHistory?.data?.change}%</Title>
        <Title level={5} className='current-price'>current {coinName} Price: ${currentPrice}</Title>
     </Col>
     </Row>
      {coinHistory!=undefined &&

        <Line data={data} options={options}/>}
    </div>
  )
}
export default LineChart;