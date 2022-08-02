const express = require('express');
const router = express.Router();
router.get("/site/home", () => {
    console.log('route ready site web');
});

module.exports =router;
