exports.GET = function(req, res) {

  var challenge = {
    index: 1,
    title: "Challenge 1",
    text: "asdjfljl jdsl jdlsj lkdslf ldjlkdsj jdl ld jldjs",
  };

  res.render('challenge', {"challenge": challenge});
};
