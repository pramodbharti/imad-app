var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content = {
  title : 'Article One | Pramod Bharti',
  heading : 'Article One',
  date : 'March 1, 2018',
  content : `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pretium lectus vel laoreet. Proin quis enim libero. Praesent at magna a magna molestie lacinia. Integer eu lacus orci. Morbi interdum risus quis eros tincidunt laoreet. Duis quis felis arcu. Donec cursus interdum volutpat. Suspendisse bibendum orci ut dolor lobortis facilisis. Proin rhoncus, justo a finibus faucibus, metus est pellentesque odio, non congue enim purus nec lectus. Donec ut nunc lorem. Phasellus nisi purus, molestie vel nibh ut, imperdiet semper sem. Suspendisse lobortis eleifend augue.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pretium lectus vel laoreet. Proin quis enim libero. Praesent at magna a magna molestie lacinia. Integer eu lacus orci. Morbi interdum risus quis eros tincidunt laoreet. Duis quis felis arcu. Donec cursus interdum volutpat. Suspendisse bibendum orci ut dolor lobortis facilisis. Proin rhoncus, justo a finibus faucibus, metus est pellentesque odio, non congue enim purus nec lectus. Donec ut nunc lorem. Phasellus nisi purus, molestie vel nibh ut, imperdiet semper sem. Suspendisse lobortis eleifend augue.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pretium lectus vel laoreet. Proin quis enim libero. Praesent at magna a magna molestie lacinia. Integer eu lacus orci. Morbi interdum risus quis eros tincidunt laoreet. Duis quis felis arcu. Donec cursus interdum volutpat. Suspendisse bibendum orci ut dolor lobortis facilisis. Proin rhoncus, justo a finibus faucibus, metus est pellentesque odio, non congue enim purus nec lectus. Donec ut nunc lorem. Phasellus nisi purus, molestie vel nibh ut, imperdiet semper sem. Suspendisse lobortis eleifend augue.
                </p>`
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
});

app.get('/article-two', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
