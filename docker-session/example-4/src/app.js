var db = require("redis").createClient({
	port: 6379, 
	host: 'redis'
});

var redis_error = 0;
db.on("error", function (err) {
    console.log("Error " + err);
    redis_error = 1;
});


require("http").createServer(function(request, response) {
	
	if(redis_error == 0 && request.url != '/favicon.ico')
	{
	    db.incr("count",function(err, reply) {
	        response.writeHead(200, { "Content-Type": "text/plain" });
	        response.write("Visitor: " + reply.toString());
	        response.end();
	    });
	}
	else{
		response.writeHead(200, { "Content-Type": "text/plain" });
	    response.write("Visitor: Can't connect to redis, disabling counter!".toString());
	    response.end();
	}
}).listen(3000);
console.log('listening on port 3000');
