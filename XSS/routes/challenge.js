
var challenges = require("../challenges");

exports.complete = function (req, res) {
	if (req.params.index >= 0 && req.params.index < challenges.length) {
		if (req.params.key == challenges[req.params.index].key) {
			challenges[req.params.index].complete = true;
			res.set('Content-Type', 'text/html');
			res.send("success");
		} else {
			res.set('Content-Type', 'text/html');
			res.send("fail");
		}
	} else {
		res.redirect("/challenge/0");
		return;
	}



};

exports.GET = function (req, res) {
	res.render('challenge', {
		"index": req.params.index,
		"challenges": challenges,
	});
};
