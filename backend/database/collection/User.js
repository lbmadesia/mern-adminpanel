const bcrypt = require('bcryptjs');

const user = [
  {
    name: 'Administration',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('1234', 10)
  },
  {
    name: 'organization',
    email: 'organization@organization.com',
    password: bcrypt.hashSync('1234', 10)
  },
  {
    name: 'Lb Madesia',
    email: 'user@user.com',
    password: bcrypt.hashSync('1234', 10)
  },
  {
    name:'excutive',
    email:'excutive@excutive.com',
    password:bcrypt.hashSync('1234',10)
  }
];

module.exports = user;
