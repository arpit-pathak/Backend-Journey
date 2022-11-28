# Goal
- Register a user
- Login a user
- Allow him to access the dashboard, but after login only

Information at register   --> firstname, lastname, email, password
Information at Login      --> email, password

> You do not ever jump into writing the code directly you first go ahead and defined what you really want to do

mvc and mvvm architecture, the idea behind that you saprate your files

# Model
## user
firstname,
lastname,
email,
password,
token


# Controller
## /register
1. collect all info from frontend - req.body
2. validate - if all data exists, if not, send a note
3. check if user already exists, if yes don't proceed
3.5 Encrypt the password
4. save to DB and send a key(token)

## /login
1. collect all info from frontend - req.body
2. validate, if no info, send a note
3. check if user exists in DB
4. match the password - password is already encrypted
5. create a key(token) for user and send it (direct send, cookie)

## /dashboard
1. check if key axists - valid 
2. allow him/her the access

# Config
## Database connection