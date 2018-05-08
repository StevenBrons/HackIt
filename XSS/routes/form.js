var challenges = require('../challenges');

exports.GET = (req, res) => {
  render(req,res);
};

exports.POST = function(req, res) {
  var t = req.body.text;
  if (t != null) {
    challenges[req.params.index].comments.push(t);
  }
  render(req,res);
};

function render(req,res) {
  var script = "";

  res.render('form', {
    "comments": challenges[req.params.index].comments,
    "index": req.params.index,
    "script": script,
    "key":challenges[req.params.index].key,
  });
}