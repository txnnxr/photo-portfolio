var app = angular.module('searchApp', []);

app.controller('SearchController', function($scope){
	$scope.query = {
		text: "Search here"
	};
	$scope.results = [{
	title: "x1",
	url: "https://s3.amazonaws.com/txnnxr-bucket/TannerW_TannerW-R1-006-1A-min.jpg",
	tags: ["drunk"],
	location: "Philadelphia, PA, USA",
	people: ["Taylor Schmid", "Shaylyn Hartman"],
	Camera: "Disposable",
	dateUploaded: "September 1, 2016 12:51:00"
},{
	title: "x2",
	url: "https://s3.amazonaws.com/txnnxr-bucket/TannerW_TannerW-R1-008-2A-min.jpg",
	tags: ["drunk"],
	location: "Philadelphia, PA, USA",
	people: ["Taylor Schmid", "Shaylyn Hartman"],
	Camera: "Disposable",
	dateUploaded: "September 2, 2016 12:51:00"
},{
	title: "x3",
	url: "https://s3.amazonaws.com/txnnxr-bucket/TannerW_TannerW-R1-012-4A-min.jpg",
	tags: ["drunk"],
	location: "Philadelphia, PA, USA",
	people: ["Taylor Schmid", "Shaylyn Hartman"],
	Camera: "Disposable",
	dateUploaded: "September 3, 2016 12:51:00"
},{
	title: "x4",
	url: "https://s3.amazonaws.com/txnnxr-bucket/TannerW_TannerW-R1-014-5A-min.jpg",
	tags: ["drunk"],
	location: "Philadelphia, PA, USA",
	people: ["Taylor Schmid", "Shaylyn Hartman"],
	Camera: "Disposable",
	dateUploaded: "September 4, 2016 12:51:00"
},{
	title: "x5",
	url: "https://s3.amazonaws.com/txnnxr-bucket/TannerW_TannerW-R1-024-10A-min.jpg",
	tags: ["drunk"],
	location: "Philadelphia, PA, USA",
	people: ["Taylor Schmid"],
	Camera: "Disposable",
	dateUploaded: "September 5, 2016 12:51:00"
},{
	title: "x6",
	url: "https://s3.amazonaws.com/txnnxr-bucket/TannerW_TannerW-R1-028-12A-min.jpg",
	tags: ["drunk"],
	location: "Philadelphia, PA, USA",
	people: ["Taylor Schmid"],
	Camera: "Disposable",
	dateUploaded: "September 6, 2016 12:51:00"
},{
	title: "x7",
	url: "https://s3.amazonaws.com/txnnxr-bucket/lei.jpg",
	tags: ["drunk"],
	location: "Charleston, SC, USA",
	people: ["Ellen Butler, Caroline Cooper"],
	Camera: "Holga 120 TLR",
	dateUploaded: "September 7, 2016 12:51:00"
},{
	title: "x8",
	url: "https://s3.amazonaws.com/txnnxr-bucket/TannerW_TannerW-R1-030-13A-min.jpg",
	tags: ["drunk"],
	location: "Philadelphia, PA, USA",
	people: [],
	Camera: "Disposable",
	dateUploaded: "September 8, 2016 12:51:00"
}];
	
	//set the number of images per row
	$scope.formattedResults = formatResults($scope.results, 3);
	//set the number of rows displayed on first load
	$scope.loadMoreLimit = 4;




	//split the results into arrays of 3 so they can be easily displayed in rows of 3 or less on page
	function formatResults(arr, size){
		var newArr = [];
		for(var i=0; i < arr.length; i+=size){
			newArr.push(arr.slice(i, i+size));
		}
		return newArr;
	};

	$scope.loadMoreResults = function(){
		var testLimit = $scope.loadMoreLimit + 4;
		if(testLimit >= $scope.results.length){
			$scope.loadMoreLimit = $scope.results.length;
		}else{
			$scope.loadMoreLimit = testLimit;
		}
	};

});


angular.module('searchApp').directive('emitLastRepeaterElement', function() {
return function(scope) {
if (scope.$last){
scope.$emit('LastRepeaterElement');
}
};
});