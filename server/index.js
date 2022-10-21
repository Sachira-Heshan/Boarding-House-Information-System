import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2";

import authRoutes from "./routes/auth.js";
import boardingsRoutes from "./routes/boardings.js";
import ownersRoutes from "./routes/owners.js";
import seekersRoutes from "./routes/seekers.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/boardings", boardingsRoutes);
app.use("/owners", ownersRoutes);
app.use("/seekers", seekersRoutes);

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "boarding_house_database",
});

app.get("/", (req, res) => {
  res.json("Express!");
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

app.get("/owners", (req, res) => {
  const sqlSelect = "SELECT owner_id, name, address, tele_no FROM owner;";

  const queryOwn = db.query(sqlSelect, (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/boardings", (req, res) => {
  const sqlSelect = "SELECT * FROM boarding_house;";

  const queryBoardings = db.query(sqlSelect, (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
