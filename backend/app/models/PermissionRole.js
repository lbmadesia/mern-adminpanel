const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const permissionRoleSchema = mongoose.Schema({
    roleId:{type:ObjectID,require:true},
    permissionId:{type:ObjectID,require:true},
    createdBy:{type:ObjectID,require:true},
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('permissionRole',permissionRoleSchema);