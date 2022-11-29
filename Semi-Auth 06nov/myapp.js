const database = require("./config/mydatabase");
database.myconnect();

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// import model = User
const User = require("./model/myuser");

const app = express();
app.use(express.json());

app.get("/",(req,req) =>{
    res.send("hello from my auth system");
})


app.post("/register", async (req, res)=>{
    try{

        // collecting data from frontend
        const { firstname, lastname, myemail, password } = req.body;
        
        // validate that data
        if (!(email && password && lastname && firstname)) {
            res.status(401).send("All fields are required");
        }
        
        // check if user is already exists or not
        const existingUser = await User.findone({email: myemail});
        if (existingUser) {
            res.status(401).send("User already exist in database")
        }
    } catch (error){
        console.log(error);
        console.log("Error is response route");
    }
    });