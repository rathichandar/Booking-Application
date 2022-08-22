const express = require('express');
const {createHotel,updateHotel,deleteHotel,getHotel,getHotels,countByCity, countByType} = require('../controller/hotel');
// const updateHotel = require('../controller/hotel');
// const getHotel = require('../controller/hotel');
// const deleteHotel = require('../controller/hotel');
// const getHotels = require('../controller/hotel');
const router = express.Router();
const Hotel  = require('../models/Hotels');
const { verifyAdmin } = require('../utils/verifytoken');

router.post('/',verifyAdmin, createHotel);

//update stuff
router.put("/:id",verifyAdmin,updateHotel)

//delete stuff


router.delete("/:id",verifyAdmin,deleteHotel);
// Get specific hotel
router.get("/find/:id",getHotel);
 

//Get all 

router.get("/",getHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);

router.get("/countByType",getHotels);





 module.exports= router;