const express = require('express');
const router = express.Router();
router.get("/site/user",()=>{
console.log('route ready site user');
});

module.exports =router;
