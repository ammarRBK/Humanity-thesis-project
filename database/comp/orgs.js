var Sequelize = require('sequelize');
var sequelize = require('./../main.js');

var schema = sequelize.define('Orgs', {
  name: {
    type: Sequelize.STRING,
    allowNull:false,
    uniqe:true
  },
  description: {
    type: Sequelize.STRING
  },
  password:{
  	type:Sequelize.STRING,
    allowNull:false
  },
  email:{
  	type:Sequelize.STRING
  },
  rate:{
  	type:Sequelize.STRING
  },
 
});


schema.sync({ alter: true })
  .catch((err) => {
    console.log(err)
  }).then((data) => {
    console.log('Orgs table created successfuly');
  });

module.exports = schema;