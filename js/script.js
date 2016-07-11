angular.module('ionicApp', ['ionic'])
    .controller('MainCtrl', function($scope, $window, $ionicSideMenuDelegate) {

        $scope.width = function() {
            return $window.innerWidth;
        };

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.toggleRight = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
    });
