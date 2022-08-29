const express = require('express');
const router = express.Router();
const controllerPath = '../app/controllers/';
const {login,register} = require(controllerPath+'authController');
router.post("/login",login);
router.post("/register",register);

module.exports = router;