const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const menuSchema = mongoose.Schema({
    type: {type:String,require:true},
    name: {type:String,require:true},
    items: {type:Array,require:true},
    createdBy: {type:ObjectID},
    updatedBy: {type:ObjectID,default:null},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Menu',menuSchema);