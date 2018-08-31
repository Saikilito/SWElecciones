const express = require('express');

const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

//Setting
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))


//Middlewere
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Route
const indexRoutes = require('./routes');
app.use('/', indexRoutes);


//Lisent Server 
app.listen(app.get('port'), () => {
    console.log('Server Listen in port: ', app.get('port'));
});