const express = require('express');
const {info_controller} = require('../../controllers');
const busRoutes = require('./bus'); 

const router = express.Router();

router.use('/bus',busRoutes);

module.exports = router;