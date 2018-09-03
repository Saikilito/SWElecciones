const express = require('express');
const router = express.Router();

const Votantes = require('../model/votante.js')();
const Candidatos = require('../model/candidato.js')();
const VotanCand = require('../model/votanCand.js')();

router.use(express.static('public'));

router.get('/', (req,res)=>{
    console.log('GET/: Pasando por 1');
    res.render('index');
});

router.get('/setDates', (req,res)=>{
    console.log('GET/setDates: Pasando por 2')
    res.render('setDates');
});

router.post('/vote',(req, res)=>{
    console.log('POST/vote: Pasando por 3 ');
    
    //Dni de la persona que acaba de votar
    let dni = req.body._id;
   
    Votantes.findById(dni,(err,votante)=>{
        if(err) throw err ;
        
        if(votante == null || votante.length == 0 )
        {
            let votante = new Votantes();
            votante.name = req.body.name;
            votante.dni = req.body.dni;
            votante.sexo = req.body.sexo;
            votante.save();
            res.redirect("/vote");
        }
        else
        {
            console.log('Ya voto');
            res.redirect('/setDates');
        }        
    }); 
});

router.get('/vote', (req,res)=>{
    console.log('GET/vote: Pasando por 4')

    Candidatos.find({},(err,candidatos)=>{
        if(err) throw err
        else
        {  
            res.render('vote', 
            {    candidatos:candidatos,
            });
        }
         
    });
});

router.post('/stadistics',(req,res)=>{
    console.log('POST/stadistics: Pasando por 5 ');
    
    let idDate = req.body.cand;

    Candidatos.findById(idDate,(err,candidato)=>{
        candidato.votes = candidato.votes + 1 ;
        console.log(candidato);
        candidato.save();
    });

    Votantes.find({},(err,votantes)=>{
        if (err) throw err;

        let vFinal = votantes.length;
        let dni = votantes[vFinal-1].dni;
       
        let register = new VotanCand();
        register.dni = dni;
        register.vote = idDate;
        console.log(register);
        register.save();
    }) ;


    res.redirect('/stadistics');
});



router.get('/stadistics', (req,res)=>{
    console.log('GET/estadistics: Pasando por 6 ');
    Candidatos.find({},(err,candidatos)=>{
        if(err) 
            return res.sendStatus(500).json(err)
        else
            res.render('stadistics',{candidatos:candidatos});        
    });
        
});

router.get('/apiV', (req,res)=>{
    console.log('GET/apiV');

    Candidatos.find({},(err,candidatos)=>{
        if(err) throw err ;
        else
            res.status(200).send(candidatos.map((e,i)=>candidatos[i].votes));
    });
});

router.get('/apiD', (req,res)=>{
    console.log('GET/ApiD');

    Votantes.find({},(err,votantes)=>{
        if(err) throw err ;
        else
        {
            (votantes)
            res.status(200).send(votantes.map((e,i)=>votantes[i].dni));
        }
    })
})

router.get('/*', (req,res)=>{
    res.status(404).send('Page not found')
});

module.exports = router ;

