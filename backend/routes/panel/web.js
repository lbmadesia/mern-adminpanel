const express = require('express');
const router = express.Router();
router.get("/home", () => {
    console.log('route ready web');
});

module.exports =router;
