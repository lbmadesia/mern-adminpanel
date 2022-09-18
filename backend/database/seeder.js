require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../app/models/User');
const Role = require('../app/models/Role');
const Permission = require('../app/models/Permission');
const PermissionRole = require('../app/models/PermissionRole');
const Module = require('../app/models/Module');
const Menu = require('../app/models/Menu');
const users = require('./collection/User');
const roles = require('./collection/Role');
const permissions = require('./collection/Permission');
const permissionRoles = require('./collection/PermissionRole');
const modules = require('./collection/Module');
const menus = require('./collection/Menu');
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
        const adminId = createdUsers[0]._id;
        const defaultPermission =  permissions.map((permission)=>{
            return {...permission,createdBy:adminId}
        });
       

        const createdPermission = await Permission.insertMany(defaultPermission);
        const companyRoleId = createdRoles[1]._id;
        const dashboardPermissionId = createdPermission[0]._id;
        const defaultpermissionRoles = permissionRoles.map((permissionRole)=>{
            return {...permissionRole,roleId:companyRoleId,permissionId:dashboardPermissionId,createdBy:adminId};
        });
        const createdpermissionRole = await PermissionRole.insertMany(defaultpermissionRoles);
        const defaultModules = modules.map((module)=>{
            return {...module,createdBy:adminId};
        });
        const createdModule = await Module.insertMany(defaultModules);
        const defaultMenus = menus.map((menu)=>{
            return {...menu,createdBy:adminId};
        });
        const createdMenu = await Menu.insertMany(defaultMenus);
     
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

    await PermissionRole.deleteMany();
    await Permission.deleteMany();
    await User.deleteMany();
    await Role.deleteMany();
    await Module.deleteMany();
}


if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}