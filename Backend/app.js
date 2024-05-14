const express = require("express");
const app = express();
const port = 3000; // You can change this port as needed

// Define a route for the status check
app.get("/status", (req, res) => {
  res.json({ status: "OK", message: "API is up and running" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
