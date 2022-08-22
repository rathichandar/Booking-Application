const express = require('express');

const {verifyAdmin,verifyUser} = require("../utils/verifytoken");
const updateUser = require('../controller/user');
const getUser = require('../controller/user');
const deleteUser = require('../controller/user');
const getUsers = require('../controller/user');
const router = express.Router();

//  router.get('/checkauthentication',verifytoken,(req, res,next) => {
//      res.send("authenticated")
//  });
// router.get('/checkuser/:id',verifyUser,(req, res,next) => {
//     res.send("user you are verified")
// });
// router.get('/checkadmin/:id',verifyAdmin,(req, res,next) => {
//     res.send("Admin you are verified")
// });
//update stuff
router.put("/:id",verifyUser,updateUser)

//delete stuff


router.delete("/:id",verifyUser,deleteUser);
// Get specific hotel
router.get("/:id",verifyUser,getUser);
 

//Get all 

router.get("/",verifyAdmin,getUsers);


 module.exports= router;