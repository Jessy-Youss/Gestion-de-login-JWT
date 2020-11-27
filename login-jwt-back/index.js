const express = require('express');
const cors = require('cors')
const routeJwt = require('./routes/jwt.route')


const app = new express();
app.use(cors())
app.use('/', routeJwt)

app.listen(8080);
