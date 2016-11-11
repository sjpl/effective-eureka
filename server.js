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

//var add = require('./routes/addEvent');

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
	response.render('indexin', dataVar);});
app.get('/hostlist', function (request, response){
	response.render('hostlist', dataVar);});
app.get('/hostpage', function (request, response) {
    response.render('hostpage', dataVar);});
app.get('/hostpage-pastevents', function (request, response) {
    response.render('hostpage-pastevents', dataVar);});
app.get('/profilepage', function (request, response) {
    response.render('profilepage', dataVar);});
app.get('/profilepage-notification', function (request, response) {
    response.render('profilepage-notification', dataVar);});
app.get('/filterpage', function (request, response) {
    response.render('filterpage', dataVar);});
app.get('/addeventpage', function (request, response) {
    response.render('addeventpage', dataVar);
});
app.get('/eventpage', function (request, response) {
    response.render('eventpage', dataVar);});
app.get('/aboutpage', function (request, response) {
    response.render('aboutpage', dataVar);});
app.get('/discusspage', function (request, response) {
    response.render('discusspage', dataVar);});

app.get('/addEvent', function(request, response) {
    	// Your code goes here
  console.log("yay, addEvent just ran!");
//    console.log(request.query.date);
//    console.log(request.query.time);
    
    var newEvent = 
        {
            eventname: request.query.eventname,
            time: request.query.time,
            date: request.query.date,
            location: request.query.location,
            about: request.query.about,
            img: "http://lorempixel.com/400/400/abstract",
            categories: "Other"
        };
    console.log(newEvent);
    
    dataVar.events.push(newEvent);
//    console.log(window.location.href);
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
