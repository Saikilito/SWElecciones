module.exports = function(){

    var db = require('../libs/db-connection.js')();
    var Schema = require('mongoose').Schema;

    var Candidatos = Schema({
        name: String,
        group: String,
        votes: Number,
        photo: String,
        cand: {type: Boolean, dafault: true} 
    });
  
   return db.model('candidato',Candidatos);
}