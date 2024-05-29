const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const isMatch = await User.findOne({ password });
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
