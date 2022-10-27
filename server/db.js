import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "boarding_house_database",
});

export default db;
