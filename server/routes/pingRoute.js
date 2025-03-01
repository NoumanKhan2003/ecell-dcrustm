import express from "express";

const pingRouter = express.Router();

pingRouter.get("/", (req, res) => {
    res.send("Pong!");
});

export default pingRouter;
