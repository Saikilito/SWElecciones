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
        res.render('vote',{candidatos:candidatos,
        });    
    });
    
});


router.post('/vote',(req, res)=>{
    console.log('POST /vote: ');
    console.log(req.body);
    
    let dni = req.body.dni;
   
    Votantes.find({dni:`${dni}` },(err,votante)=>{
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
            res.redirect('/vote ');
        }
        
    }); 
});



router.get('/stadistics', (req,res)=>{
    res.render('stadistics');
});

router.post('/stadistics',(req,res)=>{
    console.log('POST /stadistics: ');
    console.log(req.body);
    res.redirect('/stadistics');
})

router.get('/*', (req,res)=>{
    res.status(404).send('Page not found')
});

module.exports = router ;