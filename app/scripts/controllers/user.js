'use strict';

angular.module('angularApp')
  .controller('UserCtrl', function ($scope, $state, $stateParams, $location) {
	$scope.query = $stateParams.query;
	$scope.showCard = function(user_id){
		$state.go('user.card', {'id': user_id});
	};
	$scope.$watch('query', function(query){
		// modify path
		$location.search('query', query || null);
		// calculate & render results
	    var results = [];
		if (query) {
		    for (var i = 0; i < query.length; i++) {
		        results.push({ 'num': i+1, 'char': query[i], 'code': query.charCodeAt(i) });
		    }
		}
		$scope.results = results;
	});
  });
