module.exports = function(){

    var db = require('../libs/db-connection.js')();
    var Schema = require('mongoose').Schema;

    var VotanCand = new Schema({
        dni: Number,
        vote: String
    });
  
   return db.model('votanCand',VotanCand);
}