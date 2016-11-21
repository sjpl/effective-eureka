//Load data
var data = require('../data.json');

//Load page
exports.view = function(req, res){
  var usuario = req.query.email;
  var contrasena = req.query.password;
    
  var verification = data.accounts.filter(function(row){
     if(row.username === usuario && row.password === contrasena){
        return true;
      } else {
        return false;
      }
  });

  if(verification.length != 0){
      res.render('landingpage',data);
  }
  else{
      console.log("try again bro");
  }
};