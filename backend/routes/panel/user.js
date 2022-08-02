const express = require('express');
const router = express.Router();
router.get("/user",()=>{
console.log('route ready user');
});

module.exports = router;
