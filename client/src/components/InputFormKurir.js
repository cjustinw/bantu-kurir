import React, { useState } from 'react'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const InputFormKurir = ({updateDataKurir}) => {
  const [kurir, setKurir] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [kecepatan, setKecepatan] = useState("");
  const [jumlah, setJumlah] = useState("");

  const updateKurir = (e) => {
    setKurir(e.target.value);
  }
  
  const updateTanggal = (e) => {
    setTanggal(e.target.value);
  }
  
  const updateKecepatan = (e) => {
    setKecepatan(e.target.value);
  }
  
  const updateJumlah = (e) => {
    setJumlah(e.target.value);
  }

  const updateData = (e) => {
    e.preventDefault();
    let dataKurir = {
      kurir: kurir,
      tanggal: tanggal,
      kecepatan: kecepatan,
      jumlah: jumlah
    }
    updateDataKurir(dataKurir);
    setKurir("");
    setTanggal("");
    setKecepatan("");
    setJumlah("");
  }

  return (
    <>
      <form className="input-form" onSubmit={updateData}>
        <h1>Input Form</h1>
        <label htmlFor="nama-kurir" className="input-label">Nama Kurir</label>
        <input id="nama-kurir" type="text" name="kurir" value={kurir} required onChange={updateKurir}/>
        <label htmlFor="tanggal" className="input-label" >Tanggal Pengiriman</label>
        <input id="tanggal" type="date" name="tanggal" value={tanggal} required min={today} onChange={updateTanggal}/>
        <label htmlFor="kecepatan" className="input-label">Kecepatan Rata-Rata Kurir (km/jam)</label>
        <input id="kecepatan" type="number" name="kecepatan" value={kecepatan} min="0" step="any" required onChange={updateKecepatan}/>
        <label htmlFor="Jumlah-lokasi" className="input-label">Jumlah Lokasi</label>
        <input id="jumlah-lokasi" type="number" name="jumlah" value={jumlah} min="2" required onChange={updateJumlah}/>
        <button className="input-btn">Next</button>
      </form>
    </>
  )
}

export default InputFormKurir
