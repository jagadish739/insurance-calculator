'use strict';
(function() {
    angular.module('myApp')
        .controller('calculatorController', calculatorController);

    calculatorController.$inject = ['$scope'];

    function calculatorController($scope) {
        $scope.slider = {
            value: 150,
            options: {
                floor: 0,
                ceil: 450
            }
        };
    }
})();