var router = require('express').Router();

router.get("/", function(req, res) {
	res.render('default', {
		title: 'Home',
		classname: 'home',
		users: ['Ray', 'Morten', 'James']
	});
});


router.get("/about", function(req, res) {
	res.render('default', {
		title: 'Home',
		classname: 'home',
		users: ['Ray', 'Morten', 'James']
	});
});

module.exports = router;