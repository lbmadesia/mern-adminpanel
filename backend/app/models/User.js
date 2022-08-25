const mongoose = require('mongoose');

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    is_active:{type:Boolean,default:true},
    created_at:{ type: Date, default: Date.now },
    created_at:{ type: Date, default: Date.now },
});

const user = mongoose.model('users',userSchema);
exports = User;