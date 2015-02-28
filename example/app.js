angular.module('app', ['uiSwitch'])

.controller('MyController', function($scope) {
  $scope.enabled = true;

  $scope.changeCallback = function() {
    console.log('This is the state of my model ' + $scope.enabled);
  };
});
