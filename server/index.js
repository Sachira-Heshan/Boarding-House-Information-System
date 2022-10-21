const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "boarding_house_database",
});

app.get("/", (req, res) => {
  res.send("Testing Express!");
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const address = req.body.address;
  const telephone = req.body.telephone;
  const gender = req.body.gender;
  const type = req.body.type;

  const sqlInsert =
    "INSERT INTO " +
    type +
    " (name, username, email, password, address, gender, tele_no) VALUES (?,?,?,?,?,?,?);";

  const queryReg = db.query(
    sqlInsert,
    [name, username, email, password, address, gender, telephone],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.post("/auth", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const type = req.body.type;

  const sqlSelect =
    "SELECT * FROM " + type + " WHERE email = ? AND password = ?;";

  const queryLog = db.query(sqlSelect, [email, password], (err, result) => {
    if (err) {
      res.send({ err: err });
      console.log(err);
    }
    if (result.length > 0) {
      console.log(result);
      res.send(result);
    } else {
      res.send({ message: "Wrong username or password!" });
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
