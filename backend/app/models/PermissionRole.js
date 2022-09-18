const { ObjectID, Timestamp } = require('bson');
const mongoose = require('mongoose');
const permissionRoleSchema = mongoose.Schema({
    roleId:{type:ObjectID,require:true},
    permissionId:{type:ObjectID,require:true},
    createdBy:{type:ObjectID,require:true},
    createdAt:Timestamp
});

module.exports = mongoose.model('permissionRole',permissionRoleSchema);