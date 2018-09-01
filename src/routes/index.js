const express = require('express');
const router = express.Router();

const Votantes = require('../model/votante.js')();
const Candidatos = require('../model/candidato.js')();


router.use(express.static('public'));

router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/setDates', (req,res)=>{
    res.render('setDates');
});

router.get('/vote', (req,res)=>{
    Candidatos.find({},(err,candidatos)=>{
        if(err) throw err;
        res.render('vote', {candidatos:candidatos});    
    });
});

router.post('/vote',(req, res)=>{
    console.log('POST /vote: ');
    console.log(req.body);
    
    let dni = req.body.dni;
   
    Votantes.find({dni:`${dni}` },(err,votante)=>{
        if(err) throw err ;
        
        if(votante.length == 0 )
        {
            let votante = new Votantes();
            votante.name = req.body.name;
            votante.dni = req.body.dni;
            votante.sexo = req.body.sexo;
            votante.save();
            console.log('No ha votado')
            res.redirect("/vote")
        }
        else
        {
            console.log(votante);
            console.log('Ya voto');
            res.redirect('/setDates')
        }        
    }); 
});

router.get('/stadistics', (req,res)=>{
    
    Candidatos.find({},(err,candidatos)=>{
        if(err) 
            return res.sendStatus(500).json(err)
        else
            res.render('stadistics',{candidatos:candidatos});        
    });
        
});

router.post('/stadistics',(req,res)=>{
    console.log('POST /stadistics: ');
    
    let date = req.body.cand

    let idCand ;

    Candidatos.findOne({name:{$regex:date}},(err,candidato)=>{
        candidato.votes = candidato.votes + 1 ;
        candidato.save();
        idCand = candidato._id
    });
/*

    Votantes.find({},(err,votante)=>{
        console.log(err);
        console.log(votante); ;
        votante.save();
    }); 
*/
    res.redirect('/stadistics');
});

router.get('/api', (req,res)=>{
    Candidatos.find({},(err,candidatos)=>{
        if(err) throw err ;
        else
            res.status(200).send(candidatos.map((e,i)=>candidatos[i].votes));
    });
});

router.get('/apiD', (req,res)=>{
    Votantes.find({},(err,votante)=>{
        if(err) throw err ;
        else
        {
            console.log(votante)
            res.status(200).send(votante.map((e,i)=>votante[i].dni));
        }
    })
})

router.get('/*', (req,res)=>{
    res.status(404).send('Page not found')
});

module.exports = router ;

