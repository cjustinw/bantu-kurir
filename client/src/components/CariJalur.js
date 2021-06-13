import React, {useState, useRef, useEffect} from 'react';
import '../css/CariJalur.css';
import { TSP, createMatrix } from './TSP';
import DeliveryLogo from '../images/delivery.svg';
import ResultTable from './ResultTable';
import SearchBox from './SearchBox';
import Map from './Map'

const CariJalur = () => {
  const [status, setStatus] = useState(false);
  const [dataLokasi, setDataLokasi] = useState(null);
  const [found, setFound] = useState(null);
  const [resultData, setResultData] = useState("");

  const resultRef = useRef(null);
  const scrollToResult = () => resultRef.current.scrollIntoView({behavior: 'smooth'});

  useEffect(() => {
    if(status){
      scrollToResult();
    }
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
            setFound(true);
          }
          else{
            setStatus(true);
            setFound(false);
          }
        })
  }

  useEffect(() => {
    if(dataLokasi != null){
      let matriks = createMatrix(dataLokasi.dataLokasi);
      let tsp = TSP(matriks);
      setResultData({
        kurir: dataLokasi.dataKurir,
        lokasi: dataLokasi.dataLokasi,
        jalur: tsp.path,
        jarak: tsp.cost
      });
    }
  }, [dataLokasi]);

  return (
    <div className="CariJalur"> 
      <SearchBox submitData={submitData} />
      <img src={DeliveryLogo} alt="" />
      <div className="result" ref={resultRef}>
        {status ? 
        found ?
            <>
              <ResultTable data={resultData}/> 
              <Map data={resultData}/>
            </>
            : 
            <h1 className="not-found">Data tidak ditemukan</h1> 
            :''}
      </div>
    </div>
  )
}

export default CariJalur
