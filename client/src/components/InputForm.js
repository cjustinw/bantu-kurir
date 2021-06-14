import React, {useState} from 'react';
import '../css/InputForm.css';
import Succ from '../images/success.svg';
import Loading from '../images/loading.svg';
import Failed from '../images/failed.svg';
import InputFormKurir from './InputFormKurir';
import InputFormLokasi from './InputFormLokasi';
import InputFile from './InputFile';

const InputForm = ({file}) => {
  const [formState, setFormState] = useState(true);
  const [dataKurir, setDataKurir] = useState("");
  const [dataLokasi, setDataLokasi] = useState([]);
  const [number, setNumber] = useState(0);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateDataKurir = (newDataKurir) => {
    setDataKurir(newDataKurir);
    if(!file){
      setFormState(false);
    }
    setNumber(number+1);
  }

  const updateDataLokasi = (newDataLokasi) => {
    setDataLokasi([...dataLokasi, newDataLokasi]);
    setNumber(number+1);
  }

  const updateDataLokasiInput = (newDataLokasi) => {
    setDataLokasi(newDataLokasi);
  }

  const submitForm = async() => {
    setLoading(true);
    const body = {dataKurir, dataLokasi};
    console.log(body);
    fetch("/input", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    }).then(res => res.json())                     
      .then(data => {
        console.log(data);
        if(data.inputStatus){
          setSuccess(true);
        }
        else{
          setFailed(true);
        }
        setTimeout(() => {
          setSuccess(false);
          setFailed(false);
          setLoading(false);
        },2000);
        setFormState(true);
        setDataKurir("");
        setDataLokasi([]);
        setNumber(0);
      }).catch(err => console.log(err));
  }

  return (
    <>
      {loading ? 
        <div className="status-input">
        {
          success ?
          <img id="succ" src={Succ} alt="Succ" /> 
          :
          failed ?
          <img id="failed" src={Failed} alt="Succ" /> 
          :
          <img id="loading" src={Loading} alt="Succ" /> 
        }
        </div>
        : 
        <>
        {formState ? 
          <>
            {file ? 
            <InputFile updateDataKurir={updateDataKurir} updateDataLokasiInput={updateDataLokasiInput} submitForm={submitForm}/>
            :
            <InputFormKurir updateDataKurir={updateDataKurir}/>
            }
          </>
          :
          <InputFormLokasi idx={number} jumlahLokasi={dataKurir.jumlah} updateDataLokasi={updateDataLokasi} submitForm={submitForm}/>
        }
        </>
      }
    </>
  )
}

export default InputForm