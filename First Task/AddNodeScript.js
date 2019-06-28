var express = require('express');
var url = require('url');
var app = express();

function server(req, res) {
    res.sendFile(__dirname + '/index.html');
}

app.get('/', server);
app.use(express.static('public'));
app.listen(8080);