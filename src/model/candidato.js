module.exports = function(){
    
    const db = require('../libs/db-connection.js')();
    const {Schema} = require('mongoose');

    var Candidatos = new Schema({
        name: String,
        group: String,
        votes: Number,
        photo: String
    });
  
   return db.model('candidato',Candidatos);
}