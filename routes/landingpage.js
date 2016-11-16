//Load data
var data = require('../data.json');

//Load page
exports.view = function(req, res){
  res.render('landingpage',data);
};