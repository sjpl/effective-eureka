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
    console.log(request.query.timedate);
    timedate = request.query.timedate;
    console.log(typeof(timedate));
    timedate = timedate.split("T");
    console.log(timedate);
    var newEvent = 
        {
            eventname: request.query.eventname,
            time: timedate[1],
            date: timedate[0],
            location: request.query.location,
            about: request.query.about,
            img: "http://lorempixel.com/400/400/abstract",
            categories: "Other"
        };
    console.log(newEvent);
    
    data.events.push(newEvent);
    response.render('eventlistpage',data);    
}