'use strict';

angular.module('angularApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/main.html",
        controller: 'MainCtrl'
      })
      .state('user', {
        url: "/user",
        templateUrl: "views/user.html",
        controller: 'UserCtrl'
      })
      .state('user.search', {
        url: "/search/:query",
        templateUrl: "views/user_search.html",
        controller: 'UserSearchResultsCtrl'
      })
  });
