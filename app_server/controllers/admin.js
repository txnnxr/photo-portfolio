module.exports.upload = function(req, res){
  res.render('upload', { 
  	title: 'Upload',
  	content: 'This is where I will upload photos'
  });
}
