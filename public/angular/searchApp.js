var app = angular.module('searchApp', []);

var searchController = function($scope, searchData){
	$scope.query = {
		text: "Search here"
	};
	$scope.results = "";
	searchData
		.success(function(data){
			$scope.results = data;
			$scope.formattedResults = formatResults($scope.results, 3);
			console.log(data);
		})
		.error(function(e){
			console.log(e);
		});
	
	//set the number of images per row
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

};
var searchData = function($http){
	return $http.get('api/photos');
};
app.controller('searchController', searchController);
app.service('searchData', searchData);