const express = require("express");
const app = express();

const PORT = 3000;

console.log("INFO: Backend starting...");

// Simulated failure
console.error("ERROR: Database connection failed");

process.exit(1); // Force crash

app.listen(PORT, () => {
  console.log(`INFO: Backend started on port ${PORT}`);
});
