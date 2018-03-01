var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
   res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pretium lectus vel laoreet. Proin quis enim libero. Praesent at magna a magna molestie lacinia. Integer eu lacus orci. Morbi interdum risus quis eros tincidunt laoreet. Duis quis felis arcu. Donec cursus interdum volutpat. Suspendisse bibendum orci ut dolor lobortis facilisis. Proin rhoncus, justo a finibus faucibus, metus est pellentesque odio, non congue enim purus nec lectus. Donec ut nunc lorem. Phasellus nisi purus, molestie vel nibh ut, imperdiet semper sem. Suspendisse lobortis eleifend augue."); 
});

app.get('/article-two', function(req, res){
   res.send("Nulla pulvinar porta ipsum ut tristique. Ut tempor convallis consectetur. Pellentesque justo elit, varius at quam nec, euismod eleifend diam. Pellentesque vehicula ipsum sit amet risus sagittis, ut viverra diam feugiat. Nunc ac erat at dolor congue placerat. Donec consectetur diam pretium auctor cursus. Etiam tristique mollis lacus, nec vestibulum mauris cursus in."); 
});

app.get('/article-three', function(req, res){
   res.send("Nunc at metus ut quam vestibulum vestibulum vitae ut nunc. Morbi sed nisi euismod, vestibulum nulla nec, porta lorem. Nunc sodales bibendum massa, at tempus elit tempus ac. Donec mauris sem, iaculis vel tincidunt sed, molestie id tellus. Nulla nec lectus ac sem congue mattis et ut ante. Sed nec vestibulum neque, non sollicitudin ligula. Aliquam consequat interdum feugiat. Praesent nec semper quam. Vestibulum non suscipit mi. Maecenas nisl libero, egestas quis pellentesque et, porta in libero. Sed quis varius mi. Aliquam quis finibus elit, nec egestas lectus. Etiam sed accumsan mi, tincidunt luctus arcu. Mauris condimentum libero sed odio euismod, ut facilisis erat convallis. Suspendisse vestibulum nibh sit amet lectus rhoncus accumsan vel eget nisi. Quisque eu congue justo, quis tincidunt arcu."); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
