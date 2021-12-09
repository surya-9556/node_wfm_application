const Sequelize = require('sequelize');
var sequelize=require('./connection');

var user=sequelize.define('user',{
    username:{
      type: Sequelize.STRING,
      primaryKey:true
    },
    password:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    name:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    role:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    email:{
      type: Sequelize.TEXT,
      allowNull:false
    }
},{
      //don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false
}

  );

var department = sequelize.define('employee',{
  employee_id:{
    type: Sequelize.INTEGER,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type: Sequelize.STRING,
    allowNull:false
  },
  manager:{
    type: Sequelize.STRING,
    allowNull:false
  },
  experience:{
    type: Sequelize.INTEGER,
    allowNull:false
  }
},{
timestamps: false,
createdAt: false,
updatedAt: false
});

// var skills = sequelize.define('skill',{
//   skillid:{
//     type: Sequelize.INTEGER,
//     allowNull:false,
//     primaryKey:true
//   },
//   name:{
//     type: Sequelize.STRING,
//     allowNull:false
//   }
// },{
// timestamps: false,
// createdAt: false,
// updatedAt: false
// });

// var skillmap = sequelize.define('skillmap',{
//   employee_id:{
//     type: Sequelize.INTEGER,
//     allowNull:false,
//     primaryKey:true
//   },
//   skillid:{
//     type: Sequelize.INTEGER,
//     allowNull:false,
//     primaryKey:true
//   }
// })

// skillmap.hasMany(department, {foreignKey: 'employee_id'})
// skills.hasMany(skills, {foreignKey: 'skillid'})


user.sync({force: false}).then(() => {
    console.log("User table Synched!!!");
});

department.sync({force:false}).then(()=>{
  console.log('employee table synced!');
});

// skills.sync({force:false}).then(()=>{
//   console.log('skills table synced!!!');
// })

// skillmap.sync({force:false}).then(()=>{
//   console.log('skillMap table synced!!!');
// })


  module.exports={
    user:user,
    department:department
  };