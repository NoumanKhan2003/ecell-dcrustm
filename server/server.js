import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoute from "./routes/adminRoute.js";
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

app.use(adminRoute);
app.listen(process.env.Port || 3000);
