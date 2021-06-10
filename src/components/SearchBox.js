import React from 'react'
import '../css/SearchBox.css'

const SearchBox = () => {
  return (
    <form className="search-box">
      <input id="search-nama" type="text" name="" value="" placeholder="Nama Kurir" />
      <input id="search-tanggal" type="date" name="" value="" />
      <button id="search-btn" type="submit">Search</button>
    </form>
  )
}

export default SearchBox
