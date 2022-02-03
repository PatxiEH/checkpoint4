require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
var cors = require('cors');

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
