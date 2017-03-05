'use strict';
(function() {
angular.module('myApp')
    .directive('calculator', [function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/html/_calculator.html',
            scope: {
                content: '='
            },
            link: function($scope, $element, $attrs) {
                $scope.element = $element;
            },
            controller: function($scope) {
            }
        }
    }]);
})();