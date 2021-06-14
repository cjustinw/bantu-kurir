import React, {useState} from 'react'
import InputForm from './InputForm' 
import '../css/InputTujuan.css'
import InputLogo from '../images/input.svg'

const InputTujuan = () => {
  const [inputFile, setInputFile] = useState(false);

  const clickInputFile = () => {
    if(inputFile){
      setInputFile(false);
    }
    else{
      setInputFile(true);
    }
  }

  return (
    <div className="InputTujuan">
      <img src={InputLogo} alt="Logo" onClick={clickInputFile}/>
      <InputForm file={inputFile}/>
    </div>
  )
}

export default InputTujuan
