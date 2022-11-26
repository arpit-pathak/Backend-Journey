# 🔰 Basic of Express 🔰

## 🔹 Express.Js

## Express is a backend web application framework for building RESTful API's with nodejs.

### Creating file in folder using powershell
```
>       new-item -path . -name app.js
```

Will ask for name version of application, description, initial entry point file (by default this is index.js) from coder
 ```
 >      npm init 
 ```  

Accept all the default and it doesnot ask you anything
``` 
>     npm init -y 
```

## 🔹 Web Requests
- Second parameter inside of callback is always response
```
app.get('/',(req,res)=>{
    res.send('Hello JS camp 1.0')
})
```
- Route `/Arpit` is **Case-Insensitive** `/arpit` and `/arpiT` gives same response
```
app.get('/Arpit',(req, res) =>{
    res.send('<h1>Instagram is a good app</h1>')
})
```

## 🔹 Web Request 🕸 (HTTP requests) 📬
HTTP (Hypertext Transfer Protocol) specifies a collection of request methods to specify what action is to be performed on a particular resource

- GET      => Requesting Information
- POST     => Add to Database
- PUT      =>  Edit to Database
- Delete  => Delete to Database

> by @Arpit-pathak