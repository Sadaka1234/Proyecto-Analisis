const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'localhost',
    database: 'dbtest'
});
connection.connect(function(){
    console.log("Database Conectada");
})


//Add Sequelize as ORM //
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const BD_NAME = 'dbtest';
const USER = 'root';
const PASSWORD = 'localhost';
const sequelize = new Sequelize([BD_NAME], [USER], [PASSWORD],{
host: 'localhost', dialect: 'mysql', operatorsAliases: false, define: {
defaultScope:{ attributes:{
exclude: ['createdAt','updatedAt']
} } } });
// Recuerden que el JSON de conexi ́on se puede dejar en un archivo aparte
module.exports = sequelize
