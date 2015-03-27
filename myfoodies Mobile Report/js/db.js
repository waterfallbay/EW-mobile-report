//Based on http://www.html5rocks.com/en/tutorials/webdatabase/todo/

document.addEventListener("deviceready", init, false);
//Activate :active state on device
document.addEventListener("touchstart", function() {}, false);

var app = {};
app.db = null;

function init() {
	app.openDb();
	app.createTable();
}

app.openDb = function() {
   if (window.navigator.simulator === true) {
        // For debugin in simulator fallback to native SQL Lite
        console.log("Use built in SQL Lite");
        app.db = window.openDatabase("BasicInfo", "1.0", "Cordova Demo", 200000);
    }
    else {
        app.db = window.sqlitePlugin.openDatabase("BasicInfo");
    }
}

app.createTable = function() {
	var db = app.db;
	db.transaction(function(tx) {
		tx.executeSql("CREATE TABLE IF NOT EXISTS workingparameters(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT, added_on DATETIME)", [], app.onSuccess, app.onError);
	});
}
      
app.addParam = function(paramText, paramValue) {
	var db = app.db;
	db.transaction(function(tx) {
		var addedOn = new Date();
		tx.executeSql("INSERT INTO workingparameters(name, value, added_on) VALUES (?,?,?)",
					  [paramText, paramValue, addedOn],
					  app.onSuccess,
					  app.onError);
	});
}
      
app.onError = function(tx, e) {
	console.log("Error: " + e.message);
} 
      
app.onSuccess = function(tx, r) {
	console.log("DB Success:" + r);
}

function addParam(name, value) {
	app.addParam(name, value);
}