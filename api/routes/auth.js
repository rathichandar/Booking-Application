const express = require('express');
const {login,register} = require('../controller/auth.js');
//const register = require('../controller/auth.js');
const router = express.Router();



router.post('/register',register);

router.post('/login',login);

 module.exports= router;