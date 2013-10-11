'use strict';

// from: http://stackoverflow.com/questions/12592472/how-to-highlight-a-current-menu-item-in-angularjs

angular.module('angularApp')
	.directive('navTabs', ['$location', function(location) {
		return {
			restrict: 'A',
			link: function(scope, element) {
				var $ul = $(element);
				var $tabs = $ul.children();
				scope.location = location;
				scope.$watch('location.path()', function(newPath) {
					var pathRoot = '/' + newPath.split('/')[1];
					$tabs.removeClass("active");
					$tabs.each(function() {
						var $li = $(this);
						if ($li.find('a').attr('href').substring(1) === pathRoot)
							$li.addClass("active");
					});
				});
			}
		};
	}]);