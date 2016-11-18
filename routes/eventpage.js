var data = require('../data.json');
var loc = "";
var img = "";
var date = "";
var time = ""; 
var about = "";
//console.log("hi");

exports.view = function(req, res){
    var eventName = req.params.eventname;  
    
    for( var i = 0; i < data.events.length; i++){
        if(data.events[i].eventname == eventName){
            loc = data.events[i].location;
            img = data.events[i].img;
            date = data.events[i].date;
            time = data.events[i].time;
            about = data.events[i].about;
        }
    }
//    console.log("hi");
//    img = "../public/" + img;    
//    console.log(img);
    
    
//    console.log('eventname: ' + eventName);
//    console.log('location: ' + loc);
//    console.log('img: ' + img);
//    console.log('date: ' + date);
//    console.log('time: ' + time);
    
    res.render('eventpage', {
        'eventname': eventName,
        'location': loc,
        'img': img,
        'date': date,
        'time': time,
        'about': about
    });
}

exports.view2 = function(req, res){
    var eventName = req.params.eventname;  
    
    for( var i = 0; i < data.events.length; i++){
        if(data.events[i].eventname == eventName){
            loc = data.events[i].location;
            img = data.events[i].img;
            date = data.events[i].date;
            time = data.events[i].time;
            about = data.events[i].about;
        }
    }
//    console.log("hi");
//    img = "../public/" + img;    
//    console.log(img);
    
    
//    console.log('eventname: ' + eventName);
//    console.log('location: ' + loc);
//    console.log('img: ' + img);
//    console.log('date: ' + date);
//    console.log('time: ' + time);
    
    res.render('eventpage2', {
        'eventname': eventName,
        'location': loc,
        'img': img,
        'date': date,
        'time': time,
        'about': about
    });
}