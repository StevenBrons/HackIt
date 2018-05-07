var challenges = require('../challenges');

var list = ["A comment!"];

var key = "";

exports.GET = (req, res) => {
  res.render('form', {
    "comments": list,
    "index": req.params.index,
    "key":challenges[req.params.index].key,
  });
};

exports.POST = function(req, res) {
  var t = req.body.text;
  if (t != null) {
    list.push(t);
  }

  res.render('form', {
    "comments": list,
    "index": req.params.index,
    "key":challenges[req.params.index].key,
  });
};

function setKey() {
  return key = Math.random().toString(36).substring(7);  
}