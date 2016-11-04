var express = require('express');
var handlebars = require('express-handlebars')
var app = express();

//set the port of our application 
//proces.env.PORT lets the port be set by Heroku

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

//views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

var fs = require('fs');
var dataVar;
fs.readFile('public/data/data.json', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  dataVar = JSON.parse(data);
});

app.get('/', function(request, response) {
    response.render('index', dataVar);
});
app.get('/indexin', function(request, response){
	response.render('indexin');});
app.get('/hostlist', function (request, response){
	response.render('hostlist');});
app.get('/hostpage', function (request, response) {
    response.render('hostpage');});
app.get('/hostpage-pastevents', function (request, response) {
    response.render('hostpage-pastevents');});
app.get('/profilepage', function (request, response) {
    response.render('profilepage');});
app.get('/profilepage-notification', function (request, response) {
    response.render('profilepage-notification');});
app.get('/filterpage', function (request, response) {
    response.render('filterpage');});
app.get('/addeventpage', function (request, response) {
    response.render('addeventpage');});
app.get('/eventpage', function (request, response) {
    response.render('eventpage');});
app.get('/aboutpage', function (request, response) {
    response.render('aboutpage');});
app.get('/discusspage', function (request, response) {
    response.render('discusspage');});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});