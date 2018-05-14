
var challenges = require("../challenges");

exports.complete = (req, res) => {
	var index = req.params.index;

	console.log("Key submitted: " + req.params.key);
	if (index >= 0 && index < challenges.length) {
		if (req.params.key == challenges[index].key) {
			challenges[index].complete = true;
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

exports.reset = (req, res) => {
	challenges[req.params.index].comments = [];
	res.redirect("/challenge/" + req.params.index);
};

exports.get = (req, res) => {
	if (req.params.index >= 0 && req.params.index < challenges.length) {
		res.render('challenge', {
			"index": req.params.index,
			"challenges": challenges,
		});
	}
	if (req.params.index >= challenges.length) {
		for (let i = 0; i < challenges.length; i++) {
			if (!challenges[i].complete) {
				res.redirect("/challenge/" + i);
				return;
			}
		}
		res.render('win', {
		});
	}
};
