'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $timeout) {
  	function setDate() {
  		$scope.onTick = function(){
	  		$scope.date = new Date().toString();
  			$timeout($scope.onTick, 1000);
  		}
  		$scope.onTick();
  	}
  	setDate();
  });
