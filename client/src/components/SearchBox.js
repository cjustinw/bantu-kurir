import React, {useState} from 'react'
import '../css/SearchBox.css'

const SearchBox = ({submitData}) => {
  const [kurir, setKurir] = useState("");
  const [tanggal, setTanggal] = useState("");

  const updateKurir = (e) => {
    setKurir(e.target.value);
  }

  const updateTanggal = (e) => {
    setTanggal(e.target.value);
  }
  
  const onSubmitData = (e) => {
    e.preventDefault();
    submitData({kurir: kurir, tanggal: tanggal});
    setKurir("");
    setTanggal("");
  }

  return (
    <form className="search-box" onSubmit={onSubmitData}>
      <input id="search-nama" type="text" name="" value={kurir} placeholder="Nama Kurir" onChange={updateKurir} required/>
      <input id="search-tanggal" type="date" name="" value={tanggal} onChange={updateTanggal}required/>
      <button id="search-btn" type="submit">Search</button>
    </form>
  )
}

export default SearchBox
