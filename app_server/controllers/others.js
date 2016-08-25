module.exports.about = function(req, res){
  res.render('about', { 
  	title: 'About',
  	content: 'Philadelphia based photgrapher'
  });
}