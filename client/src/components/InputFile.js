import React, { useState } from 'react';
import '../css/InputFile.css';

const InputFile = ({updateDataKurir, updateDataLokasiInput, submitForm}) => {
  const [file, setFile] = useState(false);

  const inputFile = (e) => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
    setFile(true);
  }
  
  const onReaderLoad = (e) => {
    let File = JSON.parse(e.target.result);
    updateDataKurir({
      kurir: File.kurir,
      tanggal: File.tanggal,
      kecepatan: File.kecepatan,
      jumlah: File.lokasi.length
    });
    updateDataLokasiInput(File.lokasi);
  }
  return (
    <div className="input-form">
      <h1>Input File</h1>
      <p>JSON File</p>
      <input id="file" type="file" accept=".json" onChange={inputFile}/>
      {file ? <button className="input-btn" onClick={() => submitForm()}>Submit</button> : ''}
    </div>
  )
}

export default InputFile
