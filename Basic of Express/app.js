const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello JS camp 1.0')
})

app.get('/Arpit',(req, res) =>{
    res.send('<h1>Instagram is a good app</h1>')
})

app.get('/api/twitter',(req, res) =>{
    const twitter ={
        username : 'Arpit',
        follower : 5000,
        follows : 250
    }
    res.status(200).json({twitter})
})

app.get('/user/:token', (req,res)=>{
    console.log(`User value is ${req.params.token}`)
    res.status(200).json({user : req.params.token})
})
// example from mdn website

app.get('/page/:start/:end', (req,res) =>{
    res.send(`Your Start page is = ${req.params.start} 
    and your end page is = ${req.params.end}`)
})

// app.listen(port)  // this is also work
app.listen(port, () =>{
    console.log(`I am able at port ${port}`)
})

// 30th oct 2022 class (22nov)
