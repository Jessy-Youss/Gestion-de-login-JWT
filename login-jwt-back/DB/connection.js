const mysql = require('mysql');

const db = mysql.createConnection({

    host: "localhost",
 
    user: "root",
 
    password: "",

    database : "jwt"
 
  });

  db.connect((err)=>{
      if(err){
         throw err; 
      } 
      else console.log("Connection réussie");
  })

  module.exports = db;

