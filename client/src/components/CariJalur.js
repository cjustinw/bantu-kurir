import React, {useState, useRef, useEffect} from 'react';
import '../css/CariJalur.css';
import DeliveryLogo from '../images/delivery.svg';
import ResultTable from './ResultTable';
import SearchBox from './SearchBox';

const CariJalur = () => {
  const [status, setStatus] = useState(false);
  const [dataLokasi, setDataLokasi] = useState("");
  const [found, setFound] = useState(true);

  const resultRef = useRef(null);
  const scrollToResult = () => resultRef.current.scrollIntoView({behavior: 'smooth'});

  useEffect(() => {
    scrollToResult();
  }, [status]);

  const submitData = (data) => {
    const body = {data};
      fetch("/cari", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      }).then(res => res.json())
        .then(result => {
          if(result.dataLokasi.length !== 0){
            setDataLokasi({dataKurir: result.dataKurir[0], dataLokasi: result.dataLokasi});
            setStatus(true);
          }
          else{
            setFound(false);
          }
        })
  }

  return (
    <div className="CariJalur"> 
      <SearchBox submitData={submitData} />
      <img src={DeliveryLogo} alt="" />
      <div className="result" ref={resultRef}>
        {status ? 
        found ?
            <ResultTable data={dataLokasi}/> 
            : 
            <h1 className="not-found">Data tidak ditemukan</h1> 
            :''}
      </div>
    </div>
  )
}

export default CariJalur
