import React from 'react';
import '../css/CariJalur.css';
import DeliveryLogo from '../images/delivery.svg';
import ResultTable from './ResultTable';
import SearchBox from './SearchBox';

const CariJalur = () => {
  return (
    <div className="CariJalur"> 
      <SearchBox />
      <img src={DeliveryLogo} alt="" />
      <ResultTable/>
    </div>
  )
}

export default CariJalur
