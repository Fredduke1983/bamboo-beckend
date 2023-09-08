const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const productsRouter = require("./routes/products");
require("dotenv").config();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

module.exports = app;
