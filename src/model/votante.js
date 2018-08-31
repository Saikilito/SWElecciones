module.exports = ()=>{

    var db = require('../libs/db-connection.js')();
    var Schema = require('mongoose').Schema;

    var Votantes = Schema({
        name: String,
        dni: Number,
        sexo: String,
        cand: {type: Boolean, dafault: false} 
    });
  
   return db.model('votantes',Votantes);
}