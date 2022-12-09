require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((conn) => {
      console.log(`Connected to DB : ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log("db is not connected");
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
