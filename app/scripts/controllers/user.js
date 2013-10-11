'use strict';

angular.module('angularApp')
  .controller('UserCtrl', function ($scope, $stateParams, $location) {
	$scope.$watch('query', function(query){
		if (query) {
			$location.path('/user/search/' + query);
		} else {
			$location.path('/user');
		}
	});
  });
