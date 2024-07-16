const {busNamePlateValidate,errorResponse,isEmptyObject} = require('../utils/common');
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

function busUpdateMiddleware(req,res,next){
    if(isEmptyObject(req.body)){
        const explains = ["empty fields!"];
        errorResponse.error = {explains:explains,statuscode:StatusCodes.BAD_REQUEST};
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    else{
        if(req.body.busnameplate){
            if(busNamePlateValidate(req.body.busnameplate)){
                req.body.busnameplate = busNamePlateValidate(req.body.busnameplate);
            }
            else{
                const explains = ["nameplate formate not valid"];
                errorResponse.error = {explains:explains,statuscode:StatusCodes.BAD_REQUEST};
                return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
            }
        }
        next();
    }
}



module.exports = {
    busCreateValidate,
    busUpdateMiddleware,
}