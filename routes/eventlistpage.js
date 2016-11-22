//Load data
var data = require('../data.json');

//Load page
exports.view = function(req, res){
  var cate = req.params.category;
//  console.log("Category: " + cate);
//    if (cate == undefined) cate=='all';
  if(cate == 'all'){
      filtered = data;
      res.render('eventlistpage', data);
  }
    
  else{      
      var filteredJson = data.events.filter(function(row){
          if(row.categories === cate){
              return true;
          } else {
              return false;
          }
      });
      
      var filteredEvents = {
          "events": filteredJson
      }
      console.log(filteredEvents);
      res.render('eventlistpage', filteredEvents);
  }
};