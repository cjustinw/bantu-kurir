import React, {useState} from 'react'

const InputFormLokasi = ({idx, jumlahLokasi, updateDataLokasi, submitForm}) => {
  const [namaLokasi, setNamaLokasi] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  
  const updateNamaLokasi = (e) => {
    setNamaLokasi(e.target.value);
  }
  
  const updateLongitude = (e) => {
    setLongitude(e.target.value);
  }
  
  const updateLatitude = (e) => {
    setLatitude(e.target.value);
  }

  const updateData = (e) => {
    e.preventDefault();
    updateDataLokasi({lokasi: namaLokasi, longitude: longitude, latitude: latitude});
    setNamaLokasi("");
    setLongitude("");
    setLatitude("");
  }

  const submitData = (e) => {
    e.preventDefault();
    submitForm();
  }

  return (
    <div>
       <form className="input-form" onSubmit={idx <= jumlahLokasi ? updateData : submitData}>
       <h1>Input Form</h1>
       {idx <= jumlahLokasi ?
          <> 
            <label htmlFor="nama-lokasi" className="input-label">Nama Lokasi {idx} {idx === 1 ? <>(Lokasi Asal)</> : <>(Lokasi Tujuan)</>}</label>
            <input id="nama-lokasi" type="text" name="lokasi" value={namaLokasi} required onChange={updateNamaLokasi}/>
            <label htmlFor="longitude" className="input-label">Longitude</label>
            <input id="longitude" type="number" name="longitude" step="any" value={longitude} required onChange={updateLongitude}/>
            <label htmlFor="latitude" className="input-label">Latitude</label>
            <input id="latitude" type="number" name="latitude" step="any" value={latitude} required onChange={updateLatitude}/>
          <button className="input-btn">Next</button>
          </>
        :
          <button className="input-btn">Submit</button>
        }
      </form>
    </div>
  )
}

export default InputFormLokasi
