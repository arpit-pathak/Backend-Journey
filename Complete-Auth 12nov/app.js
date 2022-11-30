require('dotenv').config();
require("./config/database").connect();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require('cookie-parser');

// custom middleware
const auth = require('./middleware/auth');

// import model = User
const User = require("./model/user"); // good practice to use 'User' with capital U in code part only

const app = express();
// this all are middleware and its app level so we have to write app.use
app.use(express.json()); // discuss this later
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get("/", (req, res) => {
  res.send("Hello auth system");
});

app.post("/register", async (req, res) => {
  // console.log(req.body) // this will dump out all the information

  try {
    // collect all information from frontend
    const { firstname, lastname, email, password } = req.body;

    // validate the data, if exists
    if (!(email && password && lastname && firstname)) {
      res.status(401).send("All fields are required");
      //we need to return from here //to do
    }

    // check if the email is in correct format  // to do express-validator or Regx

    // check if user exists or not
    const existingUser = await User.findOne({ email }); //await User.findOne({email:email}) will also works same

    if (existingUser) {
      res.status(401).send("User already found in database");
    }

    //  encrypt the password
    const myEnnypassword = await bcrypt.hash(password, 10);

    // create a new entry in database
    const user = await User.create({
      firstname: firstname,
      lastname,
      email,
      password: myEnnypassword,
    });

    // create a token and send it to user
    const token = jwt.sign(
      {
        id: user._id,
        email: email,
      },
      "sha",
      { expiresIn: "2h" }
    );

    user.token = token;
    // don't want to send the password
    user.password = undefined; // or null

    res.status(201).json(user); // sending to frontend
  } catch (error) {
    console.log(error);
    console.log("Error is response route");
  }
});

app.post("/login", async (req, res) => {
  try {
    //collected information from frontend
    const { email, password } = req.body
    //validate
    if (!(email && password)) {
      res.status(401).send("email and password is required")
    }


    //check user in database
    const user = await User.findOne({ email })


    // if user does not exists - assginment
    if (!user) {
      res.status(401).send("User does not exists please register first"); //done with assginment
    }


    // match the password
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id, email }, 'sha', { expiresIn: '2h' })

      user.password = undefined;    //because we dont want to send password to frontend
      user.token = token;


      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
      }

      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
      })
    }

    res.sendStatus(400).send("email or password is incorrect");

  } catch (error) {
    console.log(error);
  }
});


module.exports = app;