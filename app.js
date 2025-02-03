const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const responseHandler = require("./response");
require("dotenv").config();

const app = express();
app.use(cors()); // Enable CORS for all routes

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/api/v1/dev", responseHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
