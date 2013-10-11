'use strict';

angular.module('angularApp')
  .controller('UserSearchResultsCtrl', function ($scope, $stateParams, $location) {
  	var query = $scope.$parent.query = $stateParams.query;
    var results = [];
    for (var i = 0; i < query.length; i++) {
        results.push({ 'num': i+1, 'char': query[i], 'code': query.charCodeAt(i) });
    }
	$scope.results = results;
});
