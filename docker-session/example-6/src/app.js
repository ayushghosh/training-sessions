var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret"
});












mysql_error = 0;
con.connect(function(err) {
  if (err){
  	console.log('cannot connect');
  } 
});



require("http").createServer(function(request, response) {
	
	if(mysql_error == 0 && request.url != '/favicon.ico')
	{
		
		  con.query('select * from mysql.user', function (err, result) {
  			console.log('cannot connect');
		    
		    response.writeHead(200, { "Content-Type": "text/plain" });
		    if(result != undefined){
	        response.write("Output " + JSON.stringify(result));
		    }
		    else{
		    	response.write("Output None" );
		    }
	        response.end();
		  });
	}
	else{
		response.writeHead(200, { "Content-Type": "text/plain" });
	    response.write("Can't connect to Mysql".toString());
	    response.end();
	}
}).listen(3000);
console.log('listening on port 3000');
