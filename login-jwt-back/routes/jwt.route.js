const express = require('express');
const app = new express();
const bodyParser = require('body-parser')
const db = require('../DB/connection');
const token = require ('../controllers/token.controllers')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/login', (req, res)=> {
    let email = req.body.email;
    let pwd = req.body.pwd;
    let id;
    let user = {validate:false};
    db.query("SELECT * FROM user WHERE email ='" + email + "' AND pwd ='" + pwd + "';",(req, data)=>{
      if(data[0] != null){
        id = data[0].id
        token.generateToken(id).then(accesstoken=>{
          user.validate = true;
          res.json({accesstoken, user: user.validate, id:id})
        })
      }
      else res.send(null)
    })
  });

  app.post('/tokenVerify', (req, res)=> {
    let accesstoken = req.body.accesstoken
    token.verifyToken(accesstoken).then(user=>{
      res.json(user)
    })
  });

  app.get('/dataUser', (req, res)=> {
    let id = req.query.id
    db.query("SELECT * FROM user WHERE id =" + id + ";",(req, data)=>{
    res.json(data)
    })

  });

  module.exports = app