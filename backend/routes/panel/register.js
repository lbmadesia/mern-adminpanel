const express = require('express');
const router = express.Router();
const controllerPath = '../../app/controllers/';
const {store} = require(controllerPath+'panel/registerController');
router.post("/register",store);

module.exports = router;
