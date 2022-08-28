require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../app/models/User');
const users = require('./collection/User');
const connectDB = require('../config/db');
connectDB();

const importData = async () => {
    try {
        await deleteSchema();
        const createdUsers = await User.insertMany(users);
        const adminId = createdUsers[0]._id;

        //   const sampleProducts = products.map((product) => {
        //     return { ...product, user: adminId }
        //   })

        //   await Product.insertMany(sampleProducts)

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Opps! Failed seeding : ${error}`);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await deleteSchema();
        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`Opps! Failed Destroying : ${error}`);
        process.exit(1);
    }
}

const deleteSchema = async () => {
    await User.deleteMany();
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}