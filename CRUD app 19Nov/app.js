require("dotenv").config();
const connectToDB = require("./config/db");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.get("/", userRoutes);

module.exports = app;
