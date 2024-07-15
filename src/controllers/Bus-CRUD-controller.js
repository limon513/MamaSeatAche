const { StatusCodes } = require('http-status-codes');
const {BusCRUDService} = require('../services');
const { successResponse, errorResponse } = require('../utils/common');

async function busCreateController(req,res){
    try {
        const response = await BusCRUDService.busCreateService(req.body);
        successResponse.data = response;
        return res.status(StatusCodes.ACCEPTED).json(successResponse);
    } catch (error) {
        errorResponse.error=error.message;
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    } 
}

async function busReadController(req,res){
    try {
        const response = await BusCRUDService.busReadService(req.body);
        if(response === null) successResponse.message = "Noting Found!";
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}

module.exports = {
    busCreateController,
    busReadController,
}