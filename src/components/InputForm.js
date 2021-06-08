import React from 'react'
import '../css/InputForm.css'

const InputForm = () => {
  return (
    <form className="input-form">
      <label htmlFor="input-label" className="input-label">Lokasi Asal</label>
      <input type="text" name="" value="" />
      <label htmlFor="input-label" className="input-label">Lokasi Tujuan</label>
      <input type="text" name="" value="" />
      <label htmlFor="input-label" className="input-label">Koordinat</label>
      <input type="text" name="" value="" />
      <label htmlFor="input-label" className="input-label">Nama Kurir</label>
      <input type="text" name="" value="" />
      <label htmlFor="input-label" className="input-label">Tanggal Pengiriman</label>
      <input type="text" name="" value="" />
      <label htmlFor="input-label" className="input-label">Estimasi Waktu Pengiriman</label>
      <input type="text" name="" value="" />
      <button type="Submit" className="input-btn">Submit</button>
    </form>
  )
}

export default InputForm
