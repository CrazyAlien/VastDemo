const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
const server = require('http').Server(app);
const port = 3000;
const helmet = require('helmet');

var indexRouter = require('./routes/index');
var adsRouter = require('./routes/ads');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	res.setHeader('Content-Type', 'text/html');
	next();
});

//pre-flight requests
app.options('*', function(req, res) {
	res.send(200);
});

server.listen(port, (err) => {
	if (err) {
		throw err;
	}
	/* eslint-disable no-console */
	console.log('Node Endpoints working :)');
});

app.use('/', indexRouter);
app.use('/ads', adsRouter);

module.exports = server;