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
  database: "test_db",
});

// app.get("/", (req, res) => {
//   const sqlSelect = "SELECT * FROM test_db.owner;";
//   const sqlInsert =
//     "INSERT INTO test_db.owner (username, email, password) VALUES ('testuser', 'testmail@test.com', 'testpass');";
//   const sqlUpdate =
//     "UPDATE test_db.owner SET username = 'testupdate', email = 'test2@mail.com' WHERE owner_id = 1;";
//   const sqlDelete = "DELETE FROM test_db.owner WHERE owner_id = 3;";
//   const queryOw = db.query(sqlSelect, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

app.post("/register", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const type = req.body.type;

  const sqlSelect = "SELECT * FROM test_db.? WHERE email = ? AND password = ?;";

  const sqlInsert =
    "INSERT INTO test_db.? (name, username, email, password) VALUES (?,?,?,?);";

  const queryLog = db.query(sqlInsert, (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      console.log(result);
      res.send(result);
    }
  });
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
