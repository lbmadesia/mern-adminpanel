const express = require('express');
const router = express.Router();

const {store} = require('../../app/controllers/panel/registerController');
router.post("/register",store);

module.exports = router;
