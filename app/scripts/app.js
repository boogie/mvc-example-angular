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
        url: "/user?query",
        templateUrl: "views/user.html",
        controller: 'UserCtrl'
      })
      .state('user.card', {
        url: "/:id",
        title: "User card", // this is nothing 
        views: {
          'modal@': {
            templateUrl: "views/user_card.html",
            controller: 'UserCardCtrl'
          }
        },
        onEnter: function(){
          $('.modal .modal-title').text(this.title);
          $(document.body).addClass('modal-open');
        },
        onExit: function(){
          $(document.body).removeClass('modal-open');
        },
      })
  });
