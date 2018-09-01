module.exports = function(){

    var db = require('../libs/db-connection.js')();
    var Schema = require('mongoose').Schema;

    var Votantes = Schema({
        name: String,
        dni: Number,
        sexo: String,
        vote: String
    });
  
   return db.model('votantes',Votantes);
}