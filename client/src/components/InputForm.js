import React, {useState} from 'react';
import '../css/InputForm.css';
import Succ from '../images/success.svg';
import Loading from '../images/loading.svg';
import InputFormKurir from './InputFormKurir';
import InputFormLokasi from './InputFormLokasi';

const InputForm = () => {
  const [formState, setFormState] = useState(true);
  const [dataKurir, setDataKurir] = useState("");
  const [dataLokasi, setDataLokasi] = useState([]);
  const [number, setNumber] = useState(0);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateDataKurir = (newDataKurir) => {
    setDataKurir(newDataKurir);
    setFormState(false);
    setNumber(number+1);
  }

  const updateDataLokasi = (newDataLokasi) => {
    setDataLokasi([...dataLokasi, newDataLokasi]);
    setNumber(number+1);
  }

  const submitForm = () => {
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
    },2000);
    setTimeout(() => {
      setSuccess(false);
      setLoading(false);
    },4000);
    setFormState(true);
    setDataKurir("");
    setDataLokasi([]);
    setNumber(0);
  }

  return (
    <>
      {loading ? 
        <div className="status-input">
        {
          success ?
          <img id="Succ" src={Succ} alt="Succ" /> 
          :
          <img id="loading" src={Loading} alt="Succ" /> 
        }
        </div>
        : 
        <>
        {formState ? 
          <InputFormKurir updateDataKurir={updateDataKurir}/>
          :
          <InputFormLokasi idx={number} jumlahLokasi={dataKurir.jumlah} updateDataLokasi={updateDataLokasi} submitForm={submitForm}/>
        }
        </>
      }
    </>
  )
}

export default InputForm