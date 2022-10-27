import db from "../db.js";
import jwt from "jsonwebtoken";

export const getBoardings = async (req, res) => {
  const q = "SELECT * FROM boarding_house;";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
};

export const getBoarding = async (req, res) => {
  const q = "SELECT * FROM boarding_house bh WHERE bh.boarding_id = ?;";
  db.query(q, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result[0]);
  });
};

export const addBoarding = async (req, res) => {
  res.json("add boarding from controller");
};

export const deleteBoarding = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token)
    return res.status(401).json({ message: "Unauthorized (no token)" });
  jwt.verify(token, "jwtkey", (err, user) => {
    if (err) return res.status(403).json({ message: "Unauthorized token" });

    const boarding_id = req.params.id;
    const q =
      "DELETE FROM boarding_house WHERE boarding_id = ? AND owner_id = ?;";
    db.query(q, [boarding_id, user.id], (err, result) => {
      if (err)
        return res
          .status(403)
          .json("The boarding house does not belong to you!");
      return res
        .status(200)
        .json({ message: "Boarding deleted successfully!" });
    });
  });
};

export const updateBoarding = async (req, res) => {
  res.json("update boarding from controller");
};
