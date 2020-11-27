const jwt = require('jsonwebtoken');
require('dotenv').config()

 async function generateToken(data){
    const payload = {id: data}
    const secret =  process.env.ACCESS_TOKEN_SECRET;
    return jwt.sign(payload, secret,{expiresIn:"10s"}) 
}

async function verifyToken(token) {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    try {
        jwt.verify(token, secret);
      } catch (err) {
        return false;
      }
    return true;
}  

module.exports.generateToken = generateToken
module.exports.verifyToken = verifyToken