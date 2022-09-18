const bcrypt = require('bcryptjs');
const Role = require('../../app/models/Role');
const user = [
  {
    name: 'Administration',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('1234', 10),
    roleId:'admin'
  },
  {
    name: 'company',
    email: 'company@company.com',
    password: bcrypt.hashSync('1234', 10),
    roleId: 'company',
  },
  {
    name:'excutive',
    email:'excutive@excutive.com',
    password:bcrypt.hashSync('1234',10),
    roleId: 'excutive'
  },
  {
    name: 'Lb Madesia',
    email: 'user@user.com',
    password: bcrypt.hashSync('1234', 10),
    roleId: 'user'
  }
];

module.exports = user;
