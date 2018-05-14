
var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'hack',
	password : 'rVl4zVZRziLjj1Q@',
	database : 'hack',
	port : 3306,
	multipleStatements: true
});

connection.connect(function (error) {
	if(!!error) {
		console.log("[MySQL error]:");
		console.log(error);
	}else {
		console.log("MySQL connection established!");
	}
});


function query (query,callback,data) {
	
	connection.query(query,function (error,rows,fields) {
		callback(error,rows,fields,data);
	});
};

function esc(input) {
	return mysql.escape(input);
}


exports.mysql = mysql;
exports.query = query;
exports.escape = esc;

