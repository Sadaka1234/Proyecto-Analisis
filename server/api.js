const express = require('express');
const router = express.Router();
const db = require('./config');

router.get('/', (req, res) =>{
    res.send('api works');
});

router.get('/entradas', (req, res) =>{
    var query = "SELECT * FROM entrada";
    db.query(query, function(err, rows){
        if(err){
            console.log(err);
            res.status(500).send({
                data: "Ups, ha ocurrido algo"
            });
        }
        else{
            return res.status(200).send(rows);
        }
    });
});
router.get('/graficos', (req, res) =>{
    var query = "SELECT * FROM graficos";
    db.query(query, function(err, rows){
        if(err){
            console.log(err);
            res.status(500).send({
                data: "Ups, ha ocurrido algo"
            });
        }
        else{
            return res.status(200).send(rows);
        }
    });
});


router.post('/entrada',(req, res)=>{
    var query = "INSERT INTO entrada (titulo, contenido) VALUES('"+req.body.titulo+"', '"+req.body.contenido+"')";
    db.query(query, function(err, rows){
        if(err){
            res.status(500).send({
                body:{
                    result:"error"
                }
            });
        }
        else{
            return res.status(200).send({
                body:{
                    result:"OK"
                }
            });
        }
    });
});
module.exports = router;


 //const db = require('./config');
 const sequelize = require('./config');
 const path = require('path');

 //Testdeconexi ́on
 sequelize.authenticate().then(() => {
 console.log("Conexion establecida");
 }).catch(err => {
 console.error("No te puedes conectar: ", err);
 });
