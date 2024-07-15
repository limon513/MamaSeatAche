const {busNamePlateValidate,errorResponse} = require('../utils/common');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/App-Error');

function busCreateValidate(req,res,next){
    if(!req.body.busnameplate || !req.body.agencyid || !req.body.capacity ||
        !busNamePlateValidate(req.body.busnameplate)
    ){
        const explains = ["Request validation falied, check fields properly."];
        errorResponse.error = explains;
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    } 
    else{
        req.body.busnameplate = busNamePlateValidate(req.body.busnameplate);
        next();
    }
}

function busReadValidate(req,res,next){
    if(!req.body){
        const explains = ["empty field!"];
        errorResponse.error = explains;
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    else{
        if(req.body.busnameplate){
            req.body.busnameplate = busNamePlateValidate(req.body.busnameplate);
        }
        next();
    }
}

module.exports = {
    busCreateValidate,
    busReadValidate,
    
}