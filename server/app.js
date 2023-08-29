const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

const mysql = require("mysql");

const app = express();
const port = 3006;
// app.use(express.json({ limit: "10mb" }));
// app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ordermeals",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/menu", (req, res) => {
  const sql = `
  SELECT id, name, description, price, amount
  FROM menu
 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/cartModal", (req, res) => {
  const sql = `
  SELECT id, name, amount, price
  FROM carts

  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/carts", (req, res) => {
  const sql = `
  INSERT INTO carts (name, price, amount)
  VALUES (?, ?, ?)

  `;

  con.query(sql, [req.body.name, req.body.price, req.body.amount], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});
