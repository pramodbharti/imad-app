var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
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

var articleOne = {
  title : 'Article Two | Pramod Bharti',
  heading : 'Article Two',
  date : 'March 2, 2018',
  content : `   
                <p>Nulla pulvinar porta ipsum ut tristique. Ut tempor convallis consectetur. Pellentesque justo elit, varius at quam nec, euismod eleifend diam. Pellentesque vehicula ipsum sit amet risus sagittis, ut viverra diam feugiat. Nunc ac erat at dolor congue placerat. Donec consectetur diam pretium auctor cursus. Etiam tristique mollis lacus, nec vestibulum mauris cursus in.
                </p>
                <p>Nulla pulvinar porta ipsum ut tristique. Ut tempor convallis consectetur. Pellentesque justo elit, varius at quam nec, euismod eleifend diam. Pellentesque vehicula ipsum sit amet risus sagittis, ut viverra diam feugiat. Nunc ac erat at dolor congue placerat. Donec consectetur diam pretium auctor cursus. Etiam tristique mollis lacus, nec vestibulum mauris cursus in.
                </p>
                <p>Nulla pulvinar porta ipsum ut tristique. Ut tempor convallis consectetur. Pellentesque justo elit, varius at quam nec, euismod eleifend diam. Pellentesque vehicula ipsum sit amet risus sagittis, ut viverra diam feugiat. Nunc ac erat at dolor congue placerat. Donec consectetur diam pretium auctor cursus. Etiam tristique mollis lacus, nec vestibulum mauris cursus in.
                </p>`
};

var articleThree = {
  title : 'Article Three | Pramod Bharti',
  heading : 'Article Three',
  date : 'March 3, 2018',
  content : `
                <p>
               Fusce placerat condimentum interdum. Integer eget sapien lacus. Aliquam in iaculis sem. Praesent in diam nec nulla tristique blandit sit amet sed lacus. Proin tincidunt, augue nec vulputate lobortis, tellus magna fermentum lorem, in congue massa orci id nisl. Maecenas at lorem at tortor pharetra laoreet eget a tellus. Nunc vulputate tortor ac sem rhoncus congue. Pellentesque eget feugiat sem. Pellentesque iaculis libero vel dictum accumsan. Mauris sed est a enim interdum ornare vehicula nec diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>Fusce placerat condimentum interdum. Integer eget sapien lacus. Aliquam in iaculis sem. Praesent in diam nec nulla tristique blandit sit amet sed lacus. Proin tincidunt, augue nec vulputate lobortis, tellus magna fermentum lorem, in congue massa orci id nisl. Maecenas at lorem at tortor pharetra laoreet eget a tellus. Nunc vulputate tortor ac sem rhoncus congue. Pellentesque eget feugiat sem. Pellentesque iaculis libero vel dictum accumsan. Mauris sed est a enim interdum ornare vehicula nec diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>Fusce placerat condimentum interdum. Integer eget sapien lacus. Aliquam in iaculis sem. Praesent in diam nec nulla tristique blandit sit amet sed lacus. Proin tincidunt, augue nec vulputate lobortis, tellus magna fermentum lorem, in congue massa orci id nisl. Maecenas at lorem at tortor pharetra laoreet eget a tellus. Nunc vulputate tortor ac sem rhoncus congue. Pellentesque eget feugiat sem. Pellentesque iaculis libero vel dictum accumsan. Mauris sed est a enim interdum ornare vehicula nec diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>`
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
   res.send(createTemplate(articleOne)); 
});

app.get('/article-two', function(req, res){
   res.send(createTemplate(articleTwo));
});

app.get('/article-three', function(req, res){
   res.send(createTemplate(articleThree));
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
