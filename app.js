var express = require('express');
var app = express();
var routes = require('./routes/myindex');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreply@easyasolution.com',
        pass: 'computer1013'
    }
}, {
    // default values for sendMail method
    from: 'noreply@easyasolution.com',
    headers: {
        'My-Awesome-Header': '123'
    }
});

app.use(express.static( "public" ));

app.set('view engine', 'ejs');

app.get('/', routes);

app.get('/contact', function(req,res){

 	var email =  'contactus@easyasolution.com'
	var subject = req.param('username') + req.param('usernum')
	var text = req.param('email') + req.param('usermessage')

	transporter.sendMail({
    	to: email,
    	subject: subject,
    	text: text
	});

	res.send("form submitted to: " + email + "We will respond to your inquery within 48 hours")

});

app.get('/subscribe', function(req,res){

	var subscription = req.param('subscription')
	var useremail = req.param('email')
    var email =  'contactus@easyasolution.com'
	var subject = 'Subscribe'

	var text = "Subscription Name is : " + subscription + " Email Is : " + useremail
	transporter.sendMail({
    	to: email,
    	subject: subject,
    	text: text
	});

	res.send("Thank you for subscribing! " + subscription)

});



var port = process.env.PORT || 5000

var server = app.listen(port, function() {
	console.log('Listening on port 5000');
});