const { where } = require("sequelize");

class CRUD{
    constructor(model){
        this.model = model;
    }

    async create(obj){
        return await this.model.create(obj);
    }

    async read(obj){
        return await this.model.findAll({
            where:obj,
        });
    }

    async update(){
        
    }
}

module.exports = CRUD;