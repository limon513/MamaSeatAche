const { StatusCodes } = require('http-status-codes');
const {BusCRUDService} = require('../services');
const { successResponse, errorResponse } = require('../utils/common');
const AppError = require('../utils/errors/App-Error');

async function busCreateController(req,res){
    try {
        const response = await BusCRUDService.busCreateService(req.body);
        successResponse.data = response;
        return res.status(StatusCodes.ACCEPTED).json(successResponse);
    } catch (error) {
        errorResponse.error=error;
        return res.status(error.statusCode).json(errorResponse);
    } 
}

async function busReadController(req,res){
    try {
        const response = await BusCRUDService.busReadService(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function busReadAllController(req,res){
    try {
        const response = await BusCRUDService.busReadAllService();
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function busDeleteController(req,res){
    try {
        const response = await BusCRUDService.busDeleteService(req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = {explains:error.message,statusCode:error.statusCode};
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function busUpdateController(req,res){
    try {
        const response = await BusCRUDService.busUpdateService(req.body,req.params.id);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = {explains:error.message,statuscode:error.statusCode};
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports = {
    busCreateController,
    busReadController,
    busReadAllController,
    busDeleteController,
    busUpdateController,
}
