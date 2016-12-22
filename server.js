var express = require('express');

// create our app

var app = express();
const PORT = process.env.PORT || 9005;
app.use(function(req, res, next){
  if(req.header['x-forwarded-proto'] === 'http']){
next();
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }
});
// we need to use Public Folder
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log(`Express Server is up on PORT: ${PORT}`);
});
