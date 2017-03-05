'use strict';
var myapp = angular.module('myApp', ['rzModule', 'ui.bootstrap']);
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
                    $scope.slider = {
                        value: 50000,
                        options: {
                            floor: 100,
                            ceil: 100000
                        }
                    };
                }
            }
        }]);
})();