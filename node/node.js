var http = require('http');
var fs = require('fs');

const PORT=8930; 

fs.readFile('../public/index.htm', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

const lib1 = require('./conn')
