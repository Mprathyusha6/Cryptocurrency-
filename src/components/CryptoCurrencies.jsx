import React,{useState} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card,Row,Col,Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurncies = () => {
const {data:cryptosList,isFetching}=useGetCryptosQuery();
 const [cryptos,setcryptos ]=useState(cryptosList?.data?.coins);

if(isFetching) return "Loading";
else console.log(cryptos);
  return (
   <div>
        Cryptocurncies
  </div>)
};

export default Cryptocurncies
