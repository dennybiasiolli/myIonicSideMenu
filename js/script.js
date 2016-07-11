angular.module('ionicApp', ['ionic'])

.directive('fader', function($timeout, $ionicGesture, $ionicSideMenuDelegate) {
    return {
        restrict: 'E',
        require: '^ionSideMenus',
        scope: true,
        link: function($scope, $element, $attr, sideMenuCtrl) {
            $ionicGesture.on('tap', function(e) {
                $ionicSideMenuDelegate.toggleRight(true);
            }, $element);
            $ionicGesture.on('dragleft', function(e) {
                sideMenuCtrl._handleDrag(e);
                e.gesture.srcEvent.preventDefault();
            }, $element);
            $ionicGesture.on('dragright', function(e) {
                sideMenuCtrl._handleDrag(e);
                e.gesture.srcEvent.preventDefault();
            }, $element);
            $ionicGesture.on('release', function(e) {
                sideMenuCtrl._endDrag(e);
            }, $element);
            $scope.sideMenuDelegate = $ionicSideMenuDelegate;
            $scope.$watch('sideMenuDelegate.getOpenRatio()', function(ratio) {
                $element[0].style.zIndex = "-1";
                // if (Math.abs(ratio) < 1) {
                //     $element[0].style.zIndex = "-1";
                //     $element[0].style.opacity = 0.7 - Math.abs(ratio);
                // } else {
                //     $element[0].style.zIndex = "-1";
                // }
            });
        }
    };
})

.directive('canDragMenu', function($timeout, $ionicGesture, $ionicSideMenuDelegate) {
    return {
        restrict: 'A',
        require: '^ionSideMenus',
        scope: true,
        link: function($scope, $element, $attr, sideMenuCtrl) {
            $ionicGesture.on('dragleft', function(e) {
                sideMenuCtrl._handleDrag(e);
                e.gesture.srcEvent.preventDefault();
            }, $element);
            $ionicGesture.on('dragright', function(e) {
                sideMenuCtrl._handleDrag(e);
                e.gesture.srcEvent.preventDefault();
            }, $element);
            $ionicGesture.on('release', function(e) {
                sideMenuCtrl._endDrag(e);
            }, $element);
        }
    };
})

.directive('pippo', function($timeout, $ionicGesture, $ionicSideMenuDelegate, $ionicScrollDelegate, $ionicBody) {
    return {
        restrict: 'A',
        require: '^ionSideMenus',
        scope: true,
        link: function($scope, $element, $attr, sideMenuCtrl) {
            $scope.sideMenuDelegate = $ionicSideMenuDelegate;
            // $scope.$watch('sideMenuDelegate.getOpenRatio()', function(ratio) {
            //     console.log('sideMenuDelegate.getOpenRatio()', ratio);
            //     // document.body.className = document.body.className.replace("menu-open", "");
            //     // $element[0].style.zIndex = "-1";
            //     console.log($ionicBody);
            //     // $ionicBody.removeClass('menu-open', 'aside-open');
            // });
            $scope.$watch(function() {
                return angular.element(document.body).attr('class');
            }, function(newValue) {
                if (newValue && newValue.indexOf('menu-open') > -1) {
                    $ionicBody.removeClass('menu-open', 'aside-open');
                }
            });
        }
    };
})

.controller('MainCtrl', function($scope, $window, $ionicSideMenuDelegate) {

    $scope.width = function() {
        return $window.innerWidth;
    };

});
