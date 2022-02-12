/**
 * Tehtävä 6
 * Backend: MariaDB, Express
 * Hoang Tran - LTDNS 20 - 2108219
 * Päivä: 24.11.2021
 */

//mysql, express, cors
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const server = app.listen(3002, () => console.log("Serveri valmiina"));

//Tietokanta yhteyta
const conn = mysql.createConnection({
  host: "localhost",
  user: "hoang6",
  password: "hoang2021",
  database: "urheilijaprofiili",
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) {
    console.log("Tapahtui virhe yhdistettäessä tietokantaan");
    return;
  }
  console.log("Yhteys muodostettu");
});

app.get("/urheilijat", (req, res) => {
  conn.query("SELECT * FROM urheilijat", (err, rows) => {
    if (err) throw err;
    return res.status(200).json(rows);
  });
});

app.get("/urheilijat/:id", (req, res) => {
  const id = Number(req.params.id);
  //const id = req.params.id;
  conn.query("SELECT * FROM urheilijat WHERE id=?", id, (err, rows) => {
    if (err) throw err;
    res.end(JSON.stringify(rows[0]));
  });
});

app.put("/urheilijat/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = req.body;
  conn.query(
    "UPDATE urheilijat SET ? WHERE id = ?;",
    [updatedUser, req.params.id],
    function (error, results) {
      if (error) throw error;
      conn.query("SELECT * FROM urheilijat WHERE id=?", id, (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows[0]));
      });
    }
  );
});

// DELETE a user

app.delete("/urheilijat/:id", (req, res) => {
  console.log("serverin poiston id:");
  const id = Number(req.params.id);
  console.log(id);
  conn.query(
    "DELETE FROM urheilijat Where id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      return;
    }
  );
});

// Lisaa urheilija
app.post("/lisaa", (req, res) => {
  let urheilija = req.body;
  console.log(urheilija);
  if (!urheilija) {
    return res
      .status(400)
      .send({ error: true, message: "urheilija  -objektia ei mudostunut" });
  }
  conn.query(
    "INSERT INTO urheilijat  SET ? ",
    urheilija,
    function (error, results, fields) {
      if (error) throw error;
      return res.send(JSON.stringify({ id: results.insertId, ...urheilija }));
    }
  );
});

module.exports = app;
