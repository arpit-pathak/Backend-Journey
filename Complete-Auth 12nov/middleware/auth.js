const jwt = require('jsonwebtoken');
// const SECRET = process.env.SECRET;

const auth = (req, res, next) => {
    console.log(req.cookies);
    const { token } = req.cookies

    // when using header (mostly in mobile apps)    
    // Authorization: "Bearer longtokenvalue";
    // const token = req.header("Authorization").replace("Bearer", "");

    // What if token is not there
    if (!token) {
        return res.status(403).send("token is missing")
    }

    // Verify token
    // console.log(`secret from auth = ${SECRET}`);
    try {
        const decode = jwt.verify(token, 'shhhhh')
        console.log(decode);
        req.user = decode


    } catch (error) {
        res.status(403).send('token is invalid')
    }

    return next()
}

module.exports = auth;
