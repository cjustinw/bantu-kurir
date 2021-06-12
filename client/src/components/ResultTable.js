import React from 'react'
import '../css/ResultTable.css';

const ResultTable = ({data}) => {
  return (
    <div className="result-table">
      <h1>Hasil Pencarian</h1>
      <div className="result-data-kurir">
        <table>
          <tr>
            <td className="result-data-kurir-title">Nama Kurir </td>
            <td>: {data.kurir.nama}</td>
          </tr>
          <tr>
            <td className="result-data-kurir-title">Tanggal </td>
            <td>: {data.kurir.tanggal}</td>
          </tr>
          <tr>
            <td className="result-data-kurir-title">Kecepatan Rata-rata</td>
            <td>: {data.kurir.kecepatan} km/jam</td>
          </tr>
          <tr>
            <td className="result-data-kurir-title">Total Jarak </td>
            <td>: {data.jarak > 1000 ? <>{(data.jarak/1000).toFixed(2)} km</> : <>{data.jarak.toFixed(2)} m</>}</td>
          </tr>
          <tr>
            <td className="result-data-kurir-title">Estimasi Waktu </td>
            <td>: {}</td>
          </tr>
        </table>
      </div>

      <table className="result-data-lokasi">
        <thead>
          <tr>
            <th>No</th>
            <th>Urutan Lokasi Tujuan</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {data.jalur.map((elmt, index) =>
            <tr>
              <td>{index+1}</td>
              <td>{data.lokasi[elmt].nama_lokasi}</td>
              <td>{data.lokasi[elmt].longitude}</td>
              <td>{data.lokasi[elmt].latitude}</td>
            </tr>
          )}
        </tbody>
    </table>
    </div>
  )
}

export default ResultTable
