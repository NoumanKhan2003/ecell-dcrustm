import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoute from "./routes/adminRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import pingRoute from "./routes/pingRoute.js";
const app = express();
dotenv.config();

app.use(express.json());
mongoose
  .connect(process.env.Url)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',adminRoute);
app.use('/ping',pingRoute)
app.listen(process.env.Port || 3000);
