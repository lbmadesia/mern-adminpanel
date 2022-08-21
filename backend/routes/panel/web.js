const express = require('express');
const router = express.Router();
const controllerPath = '../../app/controllers/panel/';
router.get("/home", () => {
    console.log('route ready web');
});

module.exports =router;
