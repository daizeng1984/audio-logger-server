var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var SuperLogin = require('superlogin');
var fs = require('fs');
 
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
var config = require('../serverConfig.js');
 
// Initialize SuperLogin 
var superlogin = new SuperLogin(config.superlogConfig);
 
// Mount SuperLogin's routes to our app 
app.use('/auth', superlogin.router);
 
var privateKey = fs.readFileSync( config.https.key );
var certificate = fs.readFileSync( config.https.cert );

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(app.get('port'));

console.log("App listening on " + app.get('port'));
