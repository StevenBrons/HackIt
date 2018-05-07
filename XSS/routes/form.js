exports.form1 = function(req, res) {

  var list = ["a dsfjlsd sdf kas f sdkh hfsdh kfh hsdkfh ","b dsfsdfkhsdkhf ksdh fkhsd ks hkhd f"];

  res.render('form', {"comments": list});
};
