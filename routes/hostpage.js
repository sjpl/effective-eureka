var data = require('../data.json');
var img = "";


exports.view = function(req, res){
    var hostName = req.params.eventname;  
    
    for( var i = 0; i < data.hosts.length; i++){
        if(data.hosts[i].hostname == hostName){
            img = data.events[i].img;
        }
    }
//    
//    console.log('eventname: ' + eventName);
//    console.log('location: ' + loc);
//    console.log('img: ' + img);
//    console.log('date: ' + date);
//    console.log('time: ' + time);
    
    res.render('hostpage', {
        'eventname': eventName,
        'location': loc,
        'img': img,
        'date': date,
        'time': time
    });
}