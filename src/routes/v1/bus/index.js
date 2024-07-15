const express = require('express');
const router = express.Router();
const {busCRUDmiddleware} = require('../../../middlewares');
const {busCRUDController} = require('../../../controllers');

router.post('/1',busCRUDmiddleware.busCreateValidate,busCRUDController.busCreateController);

router.get('/2',busCRUDmiddleware.busReadValidate,busCRUDController.busReadController);

module.exports = router;