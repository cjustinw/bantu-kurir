import React from 'react'
import InputForm from './InputForm' 
import '../css/InputTujuan.css'
import InputLogo from '../images/input.svg'

const InputTujuan = () => {
  return (
    <div className="InputTujuan">
      <img src={InputLogo} alt="Logo" />
      <InputForm/>
    </div>
  )
}

export default InputTujuan
