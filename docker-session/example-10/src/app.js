
var os = require('os');



require("http").createServer(function(request, response) {
	
	
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Hello World!!! from <strong>[ "+os.hostname() + " ]</strong>");
    response.end();
	    
}).listen(3000);
console.log('listening on port 3000');
