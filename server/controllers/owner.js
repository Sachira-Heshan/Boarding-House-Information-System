import db from "../db.js";

export const getOwners = async (req, res) => {
  const q = "SELECT * FROM owner;";
  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

export const getOwner = async (req, res) => {};
