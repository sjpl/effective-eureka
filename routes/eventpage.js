var data = require('../data.json');
var loc = "";
var img = "";
var date = "";
var time = ""; 

exports.view = function(req, res){
    var eventName = req.params.eventname;  
    
    for( var i = 0; i < data.events.length; i++){
        if(data.events[i].eventname == eventName){
            loc = data.events[i].location;
            img = data.events[i].img;
            date = data.events[i].date;
            time = data.events[i].time;
        }
    }
//    
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
        'time': time
    });
}