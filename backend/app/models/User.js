const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({
    googleId: { type: String, default: null},
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    countryCode: { type: String, default: null},
    phone: { type: Number, default: null },
    password: { type: String, required: true },
    avtar: { type: String, default: null},
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password);
};

userSchema.methods.generateToken = async function () {
    return jwt.sign({_id:this._id,name:this.name,email:this.email}, process.env.JWT_SECRET, {
        expiresIn:  process.env.JWT_EXP,
      });
};

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);