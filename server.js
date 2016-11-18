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
var landingpage = require('./routes/landingpage');

var addeventpage = require('./routes/addeventpage');
var discusspage = require('./routes/discusspage');
var eventlistpage = require('./routes/eventlistpage');
var eventpage = require('./routes/eventpage');
var hostlistpage = require('./routes/hostlistpage');
var hostpage = require('./routes/hostpage');
var hostpagepastevents = require('./routes/hostpage-pastevents');
var profilepage = require('./routes/profilepage');
var profilePageNotification = require('./routes/profilepage-notification');

//Loading pages on request.
app.get('/', index.view);
app.get('/landingpage', landingpage.view);

app.get('/addeventpage', addeventpage.view);
app.get('/discusspage', discusspage.view);
app.get('/eventlistpage/:category',eventlistpage.view);
app.get('/eventpage/:eventname', eventpage.view);
app.get('/hostlistpage', hostlistpage.view);
app.get('/hostpage/:hostname', hostpage.view);
app.get('/hostpage-pastevents', hostpagepastevents.view);
app.get('/profilepage', profilepage.view);
app.get('/profilepage-notification', profilePageNotification.view);

app.get('/addEvent', addeventpage.add);

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
