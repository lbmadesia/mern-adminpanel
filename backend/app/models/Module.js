const { ObjectID, Timestamp } = require('bson');
const mongoose = require('mongoose');
const moduleSchema = mongoose.Schema({
    name: { type: String,require:true },
    backendUrl:{type:String,require:true},
    frontendUrl:{type:String,default:null},
    createdBy:{type:ObjectID,require:true},
    updatedBy:{type:ObjectID,default:null},
    createdAt:Timestamp,
    updatedAt:Timestamp

});

module.exports=mongoose.model('permissionRole',moduleSchema);