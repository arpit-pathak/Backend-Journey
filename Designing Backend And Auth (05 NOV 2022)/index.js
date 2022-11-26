const app = require("./app")

const {PORT} = process.env  // first way
// const PORT = process.env.PORT    //second way

app.listen(PORT, ()=> console.log("Server is running at port 4000"))


// app.listen(process.env.PORT, ()=> console.log("Server is running at port 4000")) //third way


// 23-11-2022 to 25-11-2022