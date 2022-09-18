const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Role = require('./Role');
const userSchema = mongoose.Schema({
    googleId: { type: String, default: null },
    name: { type: String, required: true },
    lastName: { type: String, },
    email: { type: String, required: true, unique: true },
    countryCode: { type: String, default: null },
    phone: { type: Number, default: null },
    password: { type: String, required: true },
    avtar: { type: String, default: null },
    isActive: { type: Boolean, default: true },
    roleId: { type: ObjectID },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
    
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password);
};

userSchema.methods.generateToken = async function () {
    return jwt.sign({ _id: this._id, name: this.name, email: this.email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP,
    });
};

userSchema.pre("save", async function (next) {
    const role = await Role.findOne({ name: 'user' });
    this.roleId = role._id;
    if (!this.isModified("password")) {
        next();
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);