const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  console.log("INFO: Home route hit");
  res.send("Backend running");
});

app.get("/error", (req, res) => {
  console.error("ERROR: Something went wrong");
  res.status(500).send("Error occurred");
});

app.listen(PORT, () => {
  console.log(`INFO: Backend started on port ${PORT}`);
});
