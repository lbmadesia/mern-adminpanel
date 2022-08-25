const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Administration',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('1234', 10),
    is_active : true,
    created_at : new Date(),
    updated_at :new Date()
  },
  {
    name: 'company',
    email: 'company@company.com',
    password: bcrypt.hashSync('1234', 10),
    is_active : true,
    created_at : new Date(),
    updated_at :new Date()
  },
  {
    name: 'Lb Madesia',
    email: 'user@user.com',
    password: bcrypt.hashSync('1234', 10),
    is_active : true,
    created_at : new Date(),
    updated_at :new Date()
  },
  {
    name:'excutive',
    email:'excutive@excutive.com',
    password:bcrypt.hashSync('1234',10),
    is_active : true,
    created_at : new Date(),
    updated_at :new Date()
  }
];

export default users;
