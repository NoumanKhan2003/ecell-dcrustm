import express from "express";
import admin from "../models/adminModel.js";
const adminRouter = express.Router();

//create admin
adminRouter.post("/", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const addAdmin = await admin.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
    res.status(201).json(addAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Read all admin
adminRouter.get("/", async (req, res) => {
  try {
    const showAdmin = await admin.find();
    res.status(201).json(showAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Read a single admin
adminRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const showSingleAdmin = await admin.findById({ _id: id });
    res.status(201).json(showSingleAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Delete a single admin
adminRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const showSingleAdmin = await admin.findByIdAndDelete({ _id: id });
    res.status(201).json(showSingleAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//update a single admin
adminRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, password } = req.body;
  try {
    const updateSingleAdmin = await admin.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateSingleAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default adminRouter;
