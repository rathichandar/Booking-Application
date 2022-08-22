const Room = require("../models/Rooms");
const Hotel = require("../models/Hotels");

const createRoom  = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom  = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
}

const updateRoom= async (req,res,next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateRoom)
    } catch (err) {
        next(err);
    }
};

const deleteRoom = async (req,res,next) => {
    const hotelId = req.params.hotelid;

    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
        } catch (err) {
            next(err)
        }
        
        res.status(200).json("room deleted")
    } catch (err) {
        next(err);
    }
}

const getRoom = async (req,res,next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
};


const getRooms = async (req,res,next) => {

    try {
        const  rooms = await Room.find();
        res.status(200).json(rooms)
    } catch (err) {
        next(err);
    }
}

module.exports = {updateRoom,createRoom,deleteRoom,getRooms,getRoom}