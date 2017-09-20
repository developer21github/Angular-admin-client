var express = require('express');
var path = require('path');
var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/Admin', function (req, res) {
    res.sendFile(__dirname + "/public/app/admin/" + "index.html");
});
app.get('/Admin/*', function (req, res) {
    res.sendFile(__dirname + "/public/app/admin/" + "index.html");
});
app.get('/*', function (req, res) {
    res.sendFile(__dirname + "/public/app/client/" + "index.html");
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});
