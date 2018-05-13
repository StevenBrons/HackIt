var challenges = require('../challenges');

exports.GET = (req, res) => {
  render(req,res,"");
};

exports.POST = function(req, res) {
  var t = req.body.text;
  if (t != null) {
    challenges[req.params.index].comments.push(t);
    if (challenges[req.params.index].comments.length > 100) {
      challenges[req.params.index].comments.shift();
    }
  }
  render(req,res,"");
};

function render(req,res.error) {
  var index = req.params.index;
  if (index == null) {
    index = 0;
  }
  
  res.render('form' + index, {
    "comments": challenges[index].comments,
    "index": index,
    "key":challenges[index].key,
    "error":"sdfs",
  });
}