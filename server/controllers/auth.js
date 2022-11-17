import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const q =
    "SELECT * FROM " + req.body.type + " WHERE email = ? OR username = ?;";
  db.query(q, [req.body.email, req.body.username], (err, result) => {
    if (err) return res.json(err);
    if (result.length) return res.status(409).json("User already exists!");

    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        const q =
          "INSERT INTO " +
          req.body.type +
          " (name, username, email, password, address, gender, tele_no) VALUES (?,?,?,?,?,?,?);";
        const values = [
          req.body.name,
          req.body.username,
          req.body.email,
          hash,
          req.body.address,
          req.body.gender,
          req.body.telephone,
        ];
        db.query(q, values, (err, result) => {
          if (err) return res.json(err);
          return res.status(200).json("User registered successfully!");
        });
      });
    });
  });
};

export const login = async (req, res) => {
  const q = "SELECT * FROM " + req.body.type + " WHERE email = ?;";

  db.query(q, [req.body.email], (err, result) => {
    if (err) return res.json(err);
    if (result.length === 0) return res.status(404).json("User not found!");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      result[0].password
    );
    if (!isPasswordCorrect) return res.status(400).json("Wrong password!");

    const token = jwt.sign({ id: result[0].id }, "jwtkey");

    const { password, ...user } = result[0]; // remove password from user object

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(result[0]);
  });
};

export const logout = async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("Logged out successfully!");
};
