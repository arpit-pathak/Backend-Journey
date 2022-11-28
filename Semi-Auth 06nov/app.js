require("./config/database").connect();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// import model = User
const User = require("./model/user"); // good practice to use 'User' with capital U in code part only

const app = express();
app.use(express.json()); // discuss this later

app.get("/", (req, res) => {
  res.send("Hello auth system");
});

app.post("/register", async (req, res) => {
  try {
    // collect all information from frontend
    const { firstname, lastname, email, password } = req.body;

    // validate the data, if exists
    if (!(email && password && lastname && firstname)) {
      res.status(401).send("All fields are required");
    }

    // check if the email is in correct format

    // to do

    // check if user exists or not
    const existingUser = await User.findOne({ email }); //await User.findOne({email:email}) will also works same

    if (existingUser) {
      res.status(401).send("User already found in database");
    }
  } catch (error) {
    console.log(error);
    console.log("Error is response route");
  }
});
