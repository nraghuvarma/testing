var express = require('express');
var app = express();
var fs = require("fs");


app.get('/dashboard', function (req, res) {
   fs.readFile( __dirname + "/" + "dashboard.json", 'utf8', function (err, data) {
        console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/gallery', function (req, res) {
   fs.readFile( __dirname + "/" + "gallery.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/widgets', function (req, res) {
   fs.readFile( __dirname + "/" + "widgets.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/profile', function (req, res) {
   fs.readFile( __dirname + "/" + "profile.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/jqgridplugin', function (req, res) {
   fs.readFile( __dirname + "/" + "jqgridplugin.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/simpledynamic', function (req, res) {
   fs.readFile( __dirname + "/" + "simpledynamic.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/pricing', function (req, res) {
   fs.readFile( __dirname + "/" + "pricing.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/typography', function (req, res) {
   fs.readFile( __dirname + "/" + "typography.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/formelements', function (req, res) {
   fs.readFile( __dirname + "/" + "formelements.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/formelements2', function (req, res) {
   fs.readFile( __dirname + "/" + "formelements2.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/UIelements', function (req, res) {
   fs.readFile( __dirname + "/" + "UIelements.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/email', function (req, res) {
   fs.readFile( __dirname + "/" + "email.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/elements', function (req, res) {
   fs.readFile( __dirname + "/" + "elements.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/buttons', function (req, res) {
   fs.readFile( __dirname + "/" + "buttons.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/treeview', function (req, res) {
   fs.readFile( __dirname + "/" + "treeview.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/error404', function (req, res) {
   fs.readFile( __dirname + "/" + "error404.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/error500', function (req, res) {
   fs.readFile( __dirname + "/" + "error500.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

app.get('/invoice', function (req, res) {
   fs.readFile( __dirname + "/" + "invoice.json", 'utf8', function (err, data) {
		console.log( data );
		res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
 	    res.setHeader('Content-Type', 'application/json');
		res.send(data);
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})