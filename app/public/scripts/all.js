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
            }
        }
    }]);
})();
'use strict';
(function() {
    angular.module('myApp')
        .controller('calculatorController', calculatorController);

    calculatorController.$inject = ['$scope'];

    function calculatorController($scope) {

    }
})();