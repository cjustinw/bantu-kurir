import React from 'react'
import '../css/ResultTable.css';

const ResultTable = () => {
  return (
    <div className="result-table">
      <h1>Hasil Pencarian</h1>
      <div className="result-data-kurir">
        <table>
          <tr>
            <td className="result-data-kurir-title">Nama Kurir </td>
            <td>: William</td>
          </tr>
          <tr>
            <td className="result-data-kurir-title">Tanggal </td>
            <td>: 21/06/2021</td>
          </tr>
          <tr>
            <td className="result-data-kurir-title">Kecepatan Rata-rata</td>
            <td>: 23 km/jam</td>
          </tr>
          <tr>
            <td className="result-data-kurir-title">Total Jarak </td>
            <td>: 23 km</td>
          </tr>
          <tr>
            <td className="result-data-kurir-title">Estimasi Waktu </td>
            <td>: 23 jam</td>
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
          <tr>
            <td>1</td>
            <td>Institut Teknologi Bandung</td>
            <td>-6.89316904262651</td>
            <td>107.61041844446223</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Institut Teknologi Bandung</td>
            <td>-6.89316904262651</td>
            <td>107.61041844446223</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Institut Teknologi Bandung</td>
            <td>-6.89316904262651</td>
            <td>107.61041844446223</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Institut Teknologi Bandung</td>
            <td>-6.89316904262651</td>
            <td>107.61041844446223</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Institut Teknologi Bandung</td>
            <td>-6.89316904262651</td>
            <td>107.61041844446223</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Institut Teknologi Bandung</td>
            <td>-6.89316904262651</td>
            <td>107.61041844446223</td>
          </tr>
        </tbody>
    </table>
    </div>
  )
}

export default ResultTable
