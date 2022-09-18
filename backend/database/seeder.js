require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../app/models/User');
const Role = require('../app/models/Role');
const users = require('./collection/User');
const roles = require('./collection/Role');
const connectDB = require('../config/db');
connectDB();

const importData = async () => {
    try {
        await deleteSchema();
        const createdRoles = await Role.insertMany(roles);

          const defaultUsers = users.map((user) => {
            for (let index = 0; index < createdRoles.length; index++) {
                if(createdRoles[index].name==user.roleId){
                    return {...user,roleId:createdRoles[index]._id};
                }
                
            }
          });
         const createdUsers = await User.insertMany(defaultUsers);
          //const adminId = createdUsers[0]._id;

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
    await Role.deleteMany();
}


if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}