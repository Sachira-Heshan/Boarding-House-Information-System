import db from "../db.js";
import jwt from "jsonwebtoken";

export const getBoardings = async (req, res) => {
  const q = req.query.owner
    ? "SELECT * FROM boarding_house WHERE owner_id = ?;"
    : "SELECT * FROM boarding_house;";
  db.query(q, [req.query.owner], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
};

// export const searchBoarding = async (req, res) => {
//   const q = "SELECT * FROM boarding_house bh WHERE bh.max_no_of_people > ?;";
//   db.query(q, [req.body.no_of_maximum_people], (err, result) => {
//     if (err) return res.status(500).json(err);
//     if (result.length === 0)
//       return res.status(404).json({ message: "No boarding house found." });
//     return res.status(200).json(result);
//   });
// };

export const searchBoarding = async (req, res) => {
  // const q = "SELECT * FROM boarding_house bh WHERE bh.address LIKE '%?%';";
  // //console.log(q);
  // db.query(q, [req.body.search_place], (err, result) => {
  //   if (err) return res.status(500).json(err);
  //   if (result.length === 0)
  //     return res.status(404).json({ message: "No boarding house found." });
  //   //console.log(result);
  //   return res.status(200).json(result);
  // });

  const q = "SELECT * FROM boarding_house;";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
};

//

export const getBoarding = async (req, res) => {
  const q = "SELECT * FROM boarding_house bh WHERE bh.boarding_id = ?;";
  db.query(q, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result[0]);
  });
};

export const addBoarding = async (req, res) => {
  //

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

  //
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json({ message: "Not authenticated!" });

  // jwt.verify(token, "jwtkey", (err, data) => {
  //   if (err) return res.status(403).json({ message: "Unauthorized token!" });

  //   const q =
  //     "INSERT INTO boarding_house (owner_id, boarding_name, address, no_of_rooms, max_no_of_people, rent_period, monthly_fee, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";

  //   const values = [
  //     req.body.owner_id,
  //     req.body.boarding_name,
  //     req.body.address,
  //     req.body.no_of_rooms,
  //     req.body.max_no_of_people,
  //     req.body.rent_period,
  //     req.body.monthly_fee,
  //     req.body.description,
  //   ];

  //   db.query(q, [values], (err, result) => {
  //     if (err) return res.status(500).json(err);
  //     return res.status(200).json({ message: "Boarding added successfully!" });
  //   });
  // });
};

export const deleteBoarding = async (req, res) => {
  const boarding_id = req.params.id;
  //

  const q = "DELETE FROM boarding_house WHERE boarding_id = ?;";
  db.query(q, [boarding_id], (err, result) => {
    if (err)
      return res.status(403).json("The boarding house does not belong to you!");
    return res.status(200).json({ message: "Boarding deleted successfully!" });
  });

  //
  // const token = req.cookies.access_token;
  //console.log("Token is: " + token);
  // if (!token) return res.status(401).json({ message: "Not authenticated!" });

  // jwt.verify(token, "jwtkey", (err, data) => {
  //   if (err) return res.status(403).json({ message: "Unauthorized token!" });

  //   const q =
  //     "DELETE FROM boarding_house WHERE boarding_id = ? AND owner_id = ?;";
  //   db.query(q, [boarding_id, data.id], (err, result) => {
  //     if (err)
  //       return res
  //         .status(403)
  //         .json("The boarding house does not belong to you!");
  //     return res
  //       .status(200)
  //       .json({ message: "Boarding deleted successfully!" });
  //   });
  // });
};

export const updateBoarding = async (req, res) => {
  const boarding_id = req.params.id;
  //

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

  //
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json({ message: "Not authenticated!" });

  // jwt.verify(token, "jwtkey", (err, data) => {
  //   if (err) return res.status(403).json({ message: "Unauthorized token!" });

  //   const q =
  //     "UPDATE boarding_house SET boarding_name = ?, address = ?, no_of_rooms = ?, max_no_of_people = ?, rent_period = ?, monthly_fee = ?, description = ? WHERE boarding_id = ? AND owner_id = ?;";

  //   const values = [
  //     req.body.boarding_name,
  //     req.body.address,
  //     req.body.no_of_rooms,
  //     req.body.max_no_of_people,
  //     req.body.rent_period,
  //     req.body.monthly_fee,
  //     req.body.description,
  //   ];

  //   db.query(q, [...values, boarding_id, data.id], (err, result) => {
  //     if (err) return res.status(500).json(err);
  //     return res
  //       .status(200)
  //       .json({ message: "Boarding updated successfully!" });
  //   });
  // });
};
