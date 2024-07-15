const CRUD = require('./CRUD-repo');
const {bus} = require('../models');

class BusCrud extends CRUD{
    constructor(){
        super(bus);
    }
}

module.exports = BusCrud;