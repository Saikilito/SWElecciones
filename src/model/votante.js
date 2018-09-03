module.exports = function(){

    const db = require('../libs/db-connection.js')();
    const { Schema } = require('mongoose');

    var Votantes = new Schema({
        name: String,
        dni: Number,
        sexo: String,
        vote: String
    });
  
   return db.model('votantes',Votantes);
}