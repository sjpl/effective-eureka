//Load data
var data = require('../data.json');
console.log(data.accounts[1]);


//Load page
exports.view = function(req, res){
  res.render('profilesettingspage',data.accounts[1]);
};