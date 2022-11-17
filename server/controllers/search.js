import db from "../db.js";

export const searchBoarding = async (req, res) => {
  const place = req.body.search;
  const q =
    "SELECT * FROM boarding_house bh WHERE bh.address LIKE '%" + place + "%';";
  console.log(q);
  db.query(q, (err, result) => {
    if (err) return res.status(500).json({ message: "ERR" });
    if (result.length === 0)
      return res.status(404).json({ message: "No boarding house found." });
    return res.status(200).json(result);
  });
};
