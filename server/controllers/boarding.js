import db from "../db.js";

export const getBoardings = async (req, res) => {
  const q = req.query.owner
    ? "SELECT * FROM boarding_house WHERE owner_id = ?;"
    : "SELECT * FROM boarding_house;";
  db.query(q, [req.query.owner], (err, result) => {
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
  const q =
    "INSERT INTO boarding_house (owner_id, boarding_name, address, no_of_rooms, max_no_of_people, rent_period, monthly_fee, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";

  const values = [
    req.body.owner_id,
    req.body.boarding_name,
    req.body.address,
    req.body.no_of_rooms,
    req.body.max_no_of_people,
    req.body.rent_period,
    req.body.monthly_fee,
    req.body.description,
  ];

  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Boarding added successfully!" });
  });
};

export const deleteBoarding = async (req, res) => {
  const boarding_id = req.params.id;

  const q = "DELETE FROM boarding_house WHERE boarding_id = ?;";
  db.query(q, [boarding_id], (err, result) => {
    if (err)
      return res.status(403).json("The boarding house does not belong to you!");
    return res.status(200).json({ message: "Boarding deleted successfully!" });
  });
};

export const updateBoarding = async (req, res) => {
  const boarding_id = req.params.id;

  const q =
    "UPDATE boarding_house SET boarding_name = ?, address = ?, no_of_rooms = ?, max_no_of_people = ?, rent_period = ?, monthly_fee = ?, description = ? WHERE boarding_id = ?;";

  const values = [
    req.body.boarding_name,
    req.body.address,
    req.body.no_of_rooms,
    req.body.max_no_of_people,
    req.body.rent_period,
    req.body.monthly_fee,
    req.body.description,
  ];

  db.query(q, [...values, boarding_id], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Boarding updated successfully!" });
  });
};
