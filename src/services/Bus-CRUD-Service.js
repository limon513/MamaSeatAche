const {BusCrud} = require('../repositories');
const AppError = require('../utils/errors/App-Error');
const {StatusCodes} = require('http-status-codes');

const CRUDobj = new BusCrud();

async function busCreateService(data){
    try {
        return await CRUDobj.create(data);
    } catch (error) {
        if(error.name = "SequelizeValidationError"){
            let explains = [];
            error.errors.forEach((err)=>{
                explains.push(err.message);
            });
            throw new AppError(explains,StatusCodes.BAD_REQUEST);
        }
        throw new AppError([`Bad Request, Check request parameter!`],StatusCodes.BAD_REQUEST);
    }
}

async function busReadService(data){
    try {
        return await CRUDobj.read(data);
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(error.message,error.statusCode);
        }
        throw new AppError(["Could not connect to the server!"],StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function busReadAllService(){
    try {
        return await CRUDobj.readAll();
    } catch (error) {
        throw new AppError(["Could not connect to the server!"],StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function busDeleteService(data){
    try {
        return await CRUDobj.delete(data);
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(error.message,error.statusCode);
        }
        throw new AppError(["Could not connect to the server!"],StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    busCreateService,
    busReadService,
    busReadAllService,
    busDeleteService,

}