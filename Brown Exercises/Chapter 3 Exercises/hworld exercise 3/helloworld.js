const http = require('http');

const port = process.env.PORT || 5000

http.createServer(function (req, res) {

    let url = req.url;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<h1>Hello World!</h1>');
    res.end();

}).listen(port, function() {
    console.log("server start at port");
}