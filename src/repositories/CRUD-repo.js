const AppError = require("../utils/errors/App-Error");
const { StatusCodes } = require("http-status-codes");

class CRUD{
    constructor(model){
        this.model = model;
    }
    /**
     * api/v1/bus -> with post
     */
    async create(obj){
        return await this.model.create(obj);
    }
    /**
     * api/v1/bus/id -> with get and request param
     */
    async read(id){
        const response = await this.model.findByPk(id);
        if(!response) {
            throw new AppError(["Not Found!"],StatusCodes.NOT_FOUND);
        }
        return response;
    }
    /**
     * api/v1/bus/ -> with get request
     */
    async readAll(){
        return await this.model.findAll();
    }

    async update(){
        
    }
    /**
     * api/v1/bus/ -> with delete request
     */
    async delete(data){
        const response = await this.model.destroy({
            where:{
                id:data,
            },
        });
        if(!response) {
            console.log("not found");
            throw new AppError(["No bus to DELETE!"],StatusCodes.NOT_FOUND);
        }
        return response;
    }
}

module.exports = CRUD;