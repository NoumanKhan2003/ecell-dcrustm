import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
mongoose.connect(process.env.Url).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log("Error connecting to database", error);
});

app.get("/", (req, res) => {
res.send("Hello World!");
});
app.listen(process.env.Port || 3000);
