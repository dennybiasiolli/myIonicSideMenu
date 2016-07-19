angular.module('ionicApp', ['ionic'])
    .controller('MainCtrl', function($scope, $window, $ionicSideMenuDelegate, $element, $timeout) {
        $scope.width = function() {
            return $window.innerWidth;
        };

        $scope.first = true;
        $scope.testAnimation = function() {
            $element.find('ion-side-menu-content').addClass('menu-animated');
            angular.element($element.find('ion-side-menu')[0]).css('webkit-transform', 'translate3d(' + ($scope.first ? '50px' : '0') + ', 0, 0)');
            angular.element($element.find('ion-side-menu')[1]).css('webkit-transform', 'translate3d(' + ($scope.first ? '-100px' : '0') + ', 0, 0)');
            $element.find('ion-side-menu-content').css('webkit-transform', 'translate3d(0, ' + ($scope.first ? '100px' : '0') + ', 0)');
            $scope.first = !$scope.first;
        };
    });
