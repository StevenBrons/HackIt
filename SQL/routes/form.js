var challenges = require('../challenges');

exports.GET = (req, res) => {
  render(req,res,"");
};

exports.POST = function(req, res) {
  let t = req.body.text;
  var index = req.params.index;
  let error = "";
  if (t != null) {
    challenges[index].comments.push(t);
    if (challenges[index].comments.length > 100) {
      challenges[index].comments.shift();
    }
  }

  if (index = 4) {
    if (t.includes("<script>") || t.includes("</script>")) {
      error = "&ltscript&gt tags are not alowed";
    }
  }
  if (index = 4) {
    if (t.includes("<") || t.includes(">")) {
      error = "The &lt and &gt characters are not allowed";
    }
  }

 

  render(req,res,"");
};

function render(req,res,error) {
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