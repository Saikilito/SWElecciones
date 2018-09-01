module.exports = function(){

    var db = require('../libs/db-connection.js')();
    var Schema = require('mongoose').Schema;

    var Candidatos = Schema({
        name: String,
        group: String,
        votes: Number,
        photo: String
    });
  
   return db.model('candidato',Candidatos);
}