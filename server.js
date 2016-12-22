var express = require('express');

// create our app

var app = express();
// we need to use Public Folder
app.use(express.static('public'));

app.listen(9005, function(){
  console.log('Express Server is up on port 9005');
});
