var express = require('express');
var logger = require('log4js').getLogger();

var application = express();

application.set('port', (process.env.PORT || 5000));

application.use(express.static(__dirname + '/public'));

application.set('views', __dirname+'/views');

application.set('view engine', 'ejs');

application.get('/', function(req, res){
    res.render('index');
});

application.listen(application.get('port'), function(){
    logger.info('EEHAW - The server is started on port number '+application.get('port'));
});