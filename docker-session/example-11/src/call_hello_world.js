
var os = require('os');
const https = require('https');
const http = require('http');


require("http").createServer(function(request, response) {
	response.writeHead(200, { "Content-Type": "text/html" });







	http.get('http://localhost:3000', (resp) => {
  











  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    response.write("Content from API call to port 3000: <br><br>" + data);
    response.end();

    // console.log(data);

  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


	
    // response.write("Hello World!!! from <strong>"+os.hostname()+"</strong>");
	    
}).listen(4000);
console.log('listening on port 4000');
