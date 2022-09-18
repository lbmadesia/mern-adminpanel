const mongoose =  require('mongoose');
const permissionSchema = mongoose.Schema({
    name: { type: String,require:true },
    backendUrl:{type:String,require:true},
    frontendUrl:{type:String,default:null},
    createdBy:{type:ObjectID,require:true},
    updatedBy:{type:ObjectID,default:null},
    ccreatedAt:Timestamp,
    updatedAt:Timestamp
});

module.exports = mongoose.model('Permission',permissionSchema);