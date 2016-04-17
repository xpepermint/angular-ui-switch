angular.module('app', ['uiSwitch'])

.controller('MyController', function($scope) {
  $scope.enabled = true;
  $scope.onOff = true;
  $scope.yesNo = true;
  $scope.disabled = true;
  $scope.sizeSmall = true;
  $scope.sizeLarge = true;
  $scope.sizeClassSmall = true;
  $scope.sizeClassLarge = true;


  $scope.changeCallback = function() {
    console.log('This is the state of my model ' + $scope.enabled);
  };
});
