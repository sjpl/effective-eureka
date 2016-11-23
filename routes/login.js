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

exports.create = function(req, res){
  var huesped = req.query.hostname;
  var usuario = req.query.username;
  var contrasena = req.query.password;
  var contrasena2 = req.query.password2;
  var validPassword = false;
    
  var validHuesped = data.accounts.filter(function(row){
     if(row.hostname === huesped){
        return true;
      } else {
        return false;
      }
  });
  var validUsuario = data.accounts.filter(function(row){
     if(row.username === usuario){
        return true;
      } else {
        return false;
      }
  });
    
  if(contrasena == contrasena2){
      validPassword = true;
  }
    
  if(validHuesped.length == 0 && validUsuario.length == 0 && validPassword){
      var newAccount = 
        {
            hostname: huesped,
            username: usuario,
            password: contrasena
        };
    console.log(newAccount);
    
    data.accounts.push(newAccount);
    res.render('landingpage',data); 
  }
  else{
      console.log("try agian bro");
  }
    
};