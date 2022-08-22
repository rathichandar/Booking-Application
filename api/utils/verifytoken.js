const jwt = require('jsonwebtoken');
const createError = require('../utils/error');

const verifytoken= (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return res.status(401).json({error: "Token is required"});

    }

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(403,"you are not authenticated"));

        req.user = user;
        next();
    })
} 



const verifyUser = (req, res, next) =>{
    verifytoken(req, res,()=>{
        if(req.user.id===req.params.id|| req.user.isAdmin){
            next();
        }
        else{
            if(err)return next(createError(403,"you are not authenticated"));
    };
})
};
const verifyAdmin = (req, res, next) =>{
    verifytoken(req, res,next,()=>{
        if( req.user.isAdmin){
            next();
        }
        else{
            if(err)return next(createError(403,"you are not authenticated"));
    };
})
};
module.exports = {verifytoken,verifyAdmin,verifyUser};
