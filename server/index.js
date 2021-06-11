const express = require("express");
const path = require('path');
const pool = require("./db");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); 

app.use(express.static(path.join(__dirname, '../client/build')));

app.post("/input", async(req,res) => {
  try {
    const {dataKurir, dataLokasi} = req.body;
    const resultKurir = await pool.query(
      "SELECT * FROM data_kurir WHERE nama = $1 and tanggal = $2;",
      [dataKurir.kurir, dataKurir.tanggal]
    );
    let stat = true;
    for(let i = 0; i < dataLokasi.length-1; i++) {
      for(let j = i+1; j < dataLokasi.length; j++){
        if(dataLokasi[i].lokasi == dataLokasi[j].lokasi){
          stat = false;
        }
      }
    }
    if(resultKurir.rows.length === 0 && stat){
      await pool.query(
        "INSERT INTO data_kurir VALUES ($1, $2, $3);",
        [dataKurir.kurir, dataKurir.tanggal, dataKurir.kecepatan]
      );
      for(let i = 0; i < dataLokasi.length; i++){
        await pool.query(
          "INSERT INTO data_lokasi VALUES ($1, $2, $3, $4, $5);",
          [dataKurir.kurir, dataKurir.tanggal, dataLokasi[i].lokasi, dataLokasi[i].longitude, dataLokasi[i].latitude]
        );
      }
      return res.send({inputStatus: true});
    }
    return res.send({inputStatus: false});
  } catch (error) {
    console.error(error.message);
    return res.send({inputStatus: false});
  }
});

app.post("/cari", async(req, res) => {
  try {
    const {data} = req.body;
    const resultKurir = await pool.query(
      "SELECT * FROM data_kurir WHERE nama = $1 and tanggal = $2",
      [data.kurir, data.tanggal]
    );
    const resultLokasi = await pool.query(
      "SELECT * FROM data_lokasi WHERE nama = $1 and tanggal = $2",
      [data.kurir, data.tanggal]
    );
    return res.send({dataKurir: resultKurir.rows, dataLokasi: resultLokasi.rows});
  } catch (error) {
    console.error(error.message);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});