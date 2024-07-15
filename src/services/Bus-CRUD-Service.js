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
        const response = await CRUDobj.read(data);
        console.log(response);
        return response;
    } catch (error) {
        let explains = [];
        error.errors.forEach((err)=>{
            explains.push(err.message);
        });
        throw new AppError(explains,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    busCreateService,
    busReadService,

}