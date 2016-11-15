var data = require('../data.json');
var img = "";


exports.view = function(req, res){
    var hostName = req.params.hostname;  
    
    for( var i = 0; i < data.hosts.length; i++){
        if(data.hosts[i].hostname == hostName){
            img = data.hosts[i].img;
        }
    }
//    
//    console.log('eventname: ' + eventName);
//    console.log('location: ' + loc);
//    console.log('img: ' + img);
//    console.log('date: ' + date);
//    console.log('time: ' + time);
    
    res.render('hostpage', {
        'hostname': hostName,
        'img': img
    });
}