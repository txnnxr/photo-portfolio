module.exports.search = function(req, res){
  res.render('search', { 
  	title: 'Search',
  	content: 'Search for your favorite images.'
  });
}