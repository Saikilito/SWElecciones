const mongoose  = require('mongoose');

const URI = 'mongodb://localhost/swelec';

let db;

module.exports = function Conecction(){
    if(!db){
        db = mongoose.createConnection(URI, 
                        {useNewUrlParser: true}, 
                        (err,res)=>{
                                if(err) console.log('Error al conectar base de datos');                                            
                                console.log('Conexion con base de datos realizada');
                        }
        )
    }

    return db;
}