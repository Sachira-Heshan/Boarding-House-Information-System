import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import boardingsRoutes from "./routes/boardings.js";
import ownersRoutes from "./routes/owners.js";
import seekersRoutes from "./routes/seekers.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/boardings", boardingsRoutes);
app.use("/owners", ownersRoutes);
app.use("/seekers", seekersRoutes);

app.get("/", (req, res) => {
  res.json("Express!");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
