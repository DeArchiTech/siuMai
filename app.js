var express = require('express');
var app = express();
var routes = require('./routes/myindex');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'theeasyasolution@gmail.com',
        pass: 'computer1013'
    }
}, {
    // default values for sendMail method
    from: 'theeasyasolution@gmail.com',
    headers: {
        'My-Awesome-Header': '123'
    }
});

app.use(express.static( "public" ));

app.set('view engine', 'ejs');

app.get('/', routes);

app.get('/about', routes);

app.get('/contact', function(req,res){

 	var email =  'admin@easyasolution.com'
	var subject = 'A wild student has appeared!'
    
    var usernameSubText = 'Users name IS : ' + req.param('username') + '\n'
    var emailSubText = 'EMAIL IS : ' + req.param('email') + '\n'
    var phoneNumberSubText = 'Phone Number IS : ' + req.param('usernum') + '\n'
    var messageSubText = 'User Message IS : ' + req.param('usermessage') + '\n\n'
    var positiveMessage = 'Great Job Dood!, Keep going at it'
    
    var text = usernameSubText + emailSubText + phoneNumberSubText + messageSubText + positiveMessage

	transporter.sendMail({
    	to: email,
    	subject: subject,
    	text: text
	});
    
	//es.send("form submitted to: " + email +'\n'+ "We will respond to your inquery within 48 hours")

});

app.get('/subscribe', function(req,res){

	var subscription = req.param('subscription')
	var useremail = req.param('email')
    var email =  'admin@easyasolution.com'
	var subject = 'A wild subscription has appeared'

	var subscriptionSubtext = "Subscription Name is : " + subscription +'\n' 
    var emailSubText = "Email Is : " + useremail +'\n'
    var positiveMessage = 'Yes! +1 Subscriber, keep it going buddy'

    var text = subscriptionSubtext + emailSubText + positiveMessage

	transporter.sendMail({
    	to: email,
    	subject: subject,
    	text: text
	});
    
	/*res.send("Thank you for subscribing! " + subscription +'\n'
        +"We will send you free materials to your email: " + useremail
        +" As soon as possible")*/

});

var port = process.env.PORT || 5000

var server = app.listen(port, function() {
	console.log('Listening on port 5000');
});