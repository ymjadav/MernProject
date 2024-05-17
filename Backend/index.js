const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
