'use strict';

angular.module('angularApp')
  .controller('UserCardCtrl', function ($scope, $stateParams, $location) {
  	$scope.user_id = $stateParams.id;
  });
