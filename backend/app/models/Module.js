const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const moduleSchema = mongoose.Schema({
    name: { type: String,require:true },
    backendUrl:{type:String,require:true},
    frontendUrl:{type:String,default:null},
    createdBy:{type:ObjectID,require:true},
    updatedBy:{type:ObjectID,default:null},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});

module.exports=mongoose.model('Module',moduleSchema);