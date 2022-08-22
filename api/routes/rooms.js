const express = require('express');
const router = express.Router();

const  {updateRoom,createRoom,deleteRoom,getRooms,getRoom} = require('../controller/room')
const { verifyAdmin } = require('../utils/verifytoken');

router.post('/:hotelid',verifyAdmin, createRoom);

//update stuff
router.put("/:id",verifyAdmin,updateRoom)

//delete stuff


router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);
// Get specific hotel
router.get("/:id",getRoom);
 

//Get all 

router.get("/",getRooms);

 module.exports= router;