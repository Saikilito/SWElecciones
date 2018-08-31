const express = require('express');
const router = express.Router();

router.use(express.static('public'));
router.get('/', (req,res)=>{
    res.render('index');
});

router.post('/stadistics',(req, res)=>{
    res.redirect('/stadistics');
})

router.get('/setDates', (req,res)=>{
    res.render('setDates');
});

router.get('/stadistics', (req,res)=>{
    res.render('stadistics');
});

router.get('/*', (req,res)=>{
    res.status(404).send('Page not found')
});

module.exports = router ;