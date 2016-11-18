//Load data
var data = require('../data.json');

//Load page
exports.view = function(req, res){
  res.render('addeventpage',data);
};

exports.view2 = function(req, res){
  res.render('addeventpage2',data);
};

exports.add = function(request,response) {
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
    
    data.events.push(newEvent);
    response.render('addeventpage',data);    
}

exports.add2 = function(request,response) {
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
    
    data.events.push(newEvent);
    response.render('addeventpage2',data);    
}