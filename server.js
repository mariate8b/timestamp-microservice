const express = require("express");
const cors = require("cors");

console.log("Starting server setup...");

const app = express();
const PORT = process.env.PORT || 3000;

console.log("Middleware setup...");
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  console.log("Request received at /");
  res.send({
    message: "Welcome to the Timestamp Microservice! Use the /api/:date endpoint.",
  });
});

// Timestamp Endpoint
app.get("/api/:date?", (req, res) => {
  console.log(`Request received at /api/${req.params.date}`);
  const { date } = req.params;

  let parsedDate;
  if (!date) {
    parsedDate = new Date(); // Current date
  } else if (!isNaN(date)) {
    parsedDate = new Date(parseInt(date)); // If date is a timestamp
  } else {
    parsedDate = new Date(date); // Otherwise, parse as date string
  }

  if (parsedDate.toString() === "Invalid Date") {
    console.log("Invalid date received");
    return res.status(400).json({ error: "Invalid Date" });
  }

  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
