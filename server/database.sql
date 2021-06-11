CREATE DATABASE bantu_kurir;

CREATE TABLE data_kurir (
  nama VARCHAR (255),
  tanggal DATE,
  kecepatan REAL,

  PRIMARY KEY (nama, tanggal)
);

CREATE TABLE data_lokasi (
  nama VARCHAR (255),
  tanggal DATE,
  nama_lokasi VARCHAR (255),
  longitude REAL,
  latitude REAL,

  PRIMARY KEY (nama, tanggal, nama_lokasi),
  FOREIGN KEY (nama, tanggal)
    REFERENCES data_kurir (nama, tanggal)
);
