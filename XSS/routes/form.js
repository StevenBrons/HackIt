var challenges = require('../challenges');

exports.GET = (req, res) => {
  res.render('form', {
    "comments": challenges[req.params.index].comments,
    "index": req.params.index,
    "key":challenges[req.params.index].key,
  });
};

exports.POST = function(req, res) {
  var t = req.body.text;
  if (t != null) {
    challenges[req.params.index].comments.push(t);
  }

  res.render('form', {
    "comments": challenges[req.params.index].comments,
    "index": req.params.index,
    "key":challenges[req.params.index].key,
  });
};

function setKey() {
  return key = Math.random().toString(36).substring(7);  
}