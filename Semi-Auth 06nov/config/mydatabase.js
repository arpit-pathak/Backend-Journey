const moongoose = require("mongoose")

const MONGODB_URL = "local host"

const myconnect = () =>{
    moongoose.connect(MONGODB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(console.log("DB connectd with a success"))
    .catch((error) =>{
        console.log("DB connection falied");
        console.log(error);
        process.exit(1);
    })
}

module.exports = myconnect;