'use strict';

angular.module('angularApp')
  .directive('backButton', function(){
      return {
        restrict: 'A',
   
        link: function(scope, element, attrs) {
          element.bind('click', goBack);
   
          function goBack() {
            window.history.back();
          }
        }
      }
  });