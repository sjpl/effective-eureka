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

//Setting the routes
var index = require('./routes/index');
var indexin = require('./routes/indexin');

var addeventpage = require('./routes/addeventpage');
var discusspage = require('./routes/discusspage');
var eventpage = require('./routes/eventpage');
var filterpage = require('./routes/filterpage');
var hostlist = require('./routes/hostlist');
var hostpage = require('./routes/hostpage');
var hostpagepastevents = require('./routes/hostpage-pastevents');
var profilepage = require('./routes/profilepage');
var profilePageNotification = require('./routes/profilepage-notification');

//Loading pages on request.
app.get('/', index.view);
app.get('/indexin',indexin.view);

app.get('/addeventpage', addeventpage.view);
app.get('/discusspage', discusspage.view);
app.get('/eventpage/:eventname', eventpage.view);
app.get('/filterpage', filterpage.view);
app.get('/hostlist', hostlist.view);
app.get('/hostpage/:hostname', hostpage.view);
app.get('/hostpage-pastevents', hostpagepastevents.view);
app.get('/profilepage', profilepage.view);
app.get('/profilepage-notification', profilePageNotification.view);

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
