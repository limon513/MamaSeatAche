const express = require('express');
const router = express.Router();
const {busCRUDmiddleware} = require('../../../middlewares');
const {busCRUDController} = require('../../../controllers');

router.post('/',busCRUDmiddleware.busCreateValidate,busCRUDController.busCreateController);

router.get('/',busCRUDController.busReadAllController);

router.get('/:id',busCRUDController.busReadController);

router.delete('/:id',busCRUDController.busDeleteController);

router.patch('/:id',busCRUDmiddleware.busUpdateMiddleware,busCRUDController.busUpdateController);

module.exports = router;