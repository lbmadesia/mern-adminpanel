require('path').config();
const mongoose = require('mongoose');
const user = require('../app/models/User');
const users = require('./collection/User');
const connectDB = require('../config/db');
connectDB();