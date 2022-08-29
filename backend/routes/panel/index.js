const express = require('express');
const router = express.Router();
const controllerPath = '../../app/controllers/panel/';
const {store} = require(controllerPath+'registerController');
router.post("/register",store);

module.exports = router;
