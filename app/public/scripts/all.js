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
                            value: 5000,
                            options: {
                                floor: 100,
                                ceil: 10000
                            }
                        };

                        const range = [{
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
                            let obj = range.find(iterator);
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

                        $scope.isActive = [{
                            one: false
                        }, {
                            two: false
                        }, {
                            three: false
                        }, {
                            four: false
                        }, {
                            five: false
                        }, {
                            six: false
                        }];


                        $scope.oneInstalment = () => {
                            $scope.isActive[0].one = !$scope.isActive[0].one;
                            if ($scope.isActive[0].one) {
                                $scope.indirect = $scope.rata * 0.98;
                                console.log($scope.indirect);
                            } else {
                                $scope.indirect = $scope.rata;
                                console.log($scope.indirect);
                            }
                        };

                        $scope.twoInstalment = () => {
                            $scope.isActive[1].two = !$scope.isActive[1].two;
                            if ($scope.isActive[1].two) {
                                $scope.indirect = $scope.rata * 1.02;
                                console.log($scope.indirect);
                            } else {
                                $scope.indirect = $scope.rata;
                                console.log($scope.indirect);
                            }
                        };

                        $scope.threeInstalment = () => {
                            $scope.isActive[2].three = !$scope.isActive[2].three;
                            if ($scope.isActive[2].three) {
                                $scope.indirect = $scope.rata * 1.03;
                                console.log($scope.indirect);
                            } else {
                                $scope.indirect = $scope.rata;
                                console.log($scope.indirect);
                            }
                        };

                        $scope.fourInstalment = () => {
                            $scope.isActive[3].four = !$scope.isActive[3].four;
                            if ($scope.isActive[3].four) {
                                $scope.indirect = $scope.rata * 1.04;
                                console.log($scope.indirect);
                            } else {
                                $scope.indirect = $scope.rata;
                                console.log($scope.indirect);
                            }
                        };

                        $scope.firstState = (indirect) => {
                            $scope.isActive[4].five = !$scope.isActive[4].five;
                            if ($scope.isActive[4].five) {
                                $scope.final = $scope.indirect * 0.95;
                                console.log($scope.final);
                            } else {
                                $scope.final = indirect;
                                console.log($scope.indirect);
                            }
                        }

                        $scope.secondState = (indirect) => {
                            $scope.isActive[5].six = !$scope.isActive[5].six;
                            if ($scope.isActive[5].six) {
                                $scope.final = $scope.indirect * 1.08;
                                console.log($scope.final);
                            } else {
                                $scope.final = indirect;
                                console.log($scope.indirect);
                            }
                        };

                    } //end controller
            } //end return
        }]);
})();