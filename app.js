var express = require('express')
var app = express()
//var transporter = nodemailer.createTransport(transport[, defaults])

app.set('view engine', 'ejs');
app.use(express.static( "public" ));

app.get('/', function(req,res){
	res.render('default', {
		title: 'Home',
		classname: 'home',
		users: ['Ray', 'Morten', 'Jame']
	});
});

app.get('/about', function(req,res){
	res.render('default', {
		title: 'About Us',
		classname: 'about'
	});
});

var port = process.env.PORT || 5000

var server = app.listen(port, function() {
	console.log('Listening on port 5000');
});