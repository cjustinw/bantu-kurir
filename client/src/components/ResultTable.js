import React from 'react'
import '../css/ResultTable.css';

const hitungWaktu = (jarak, kecepatan) => {
  // let waktu = (jarak/kecepatan)*3600;
  // let jam = Math.floor(waktu / 3600);
  // waktu %= 3600;
  // let menit = Math.floor(waktu / 60);
  var time = new Date(null);
  time.setSeconds((jarak/kecepatan)*3600);
  let timeMeasured = time.toISOString().substr(11,8);
  console.log(timeMeasured);
  return timeMeasured;
}

const ResultTable = ({data}) => {
  const date = new Date(data.kurir.tanggal);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

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
            <td>: {day} {bulan[month+1]} {year}</td>
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
            <td>: {hitungWaktu(data.jarak/1000, data.kurir.kecepatan)}</td>
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
