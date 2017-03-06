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
                            value: 5000,
                            options: {
                                floor: 100,
                                ceil: 10000
                            }
                        };

                        const Value = [{
                            min: 100,
                            max: 1000,
                            value: 20
                        }, {
                            min: 1001,
                            max: 3000,
                            value: 70
                        }, {
                            min: 3001,
                            max: 6000,
                            value: 130
                        }, {
                            min: 6001,
                            max: 9000,
                            value: 180
                        }, {
                            min: 9001,
                            max: 10000,
                            value: 200
                        }];

                        let value = $scope.slider.value;
                        $scope.$watch('slider.value', function findElement(value) {
                            const iterator = (item) =>
                                item.min <= value && item.max >= value;
                            let obj = Value.find(iterator);
                            $scope.rata = obj.value;
                        })

                        let isClicked = false;
                        $scope.installment = (rata) => {
                            if (!isClicked) {
                                let wynik = Math.round($scope.rata * 0.95);
                                console.log("wynik: " + wynik);
                                isClicked = !isClicked;
                            } else {
                                console.log("Przed zmiana" + $scope.rata);
                                isClicked = !isClicked;
                            }
                        }
                    } //end controller
            } //end return
        }]);
})();