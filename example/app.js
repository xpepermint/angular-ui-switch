angular.module('app', ['uiSwitch'])

.controller('MyController', function($scope) {
  $scope.enabled = true;
  $scope.enabledWithArguments = true;
  $scope.onOff = true;
  $scope.yesNo = true;
  $scope.disabled = true;


  $scope.changeCallback = function() {
    console.log('This is the state of my model ' + $scope.enabled);
  };
  
  $scope.changeCallbackWithArguments = function(arg) {
    console.log('This is the state of my model ' + $scope.enabledWithArguments + '\nValue of passed argument is "' + arg.someArgument + '"' + "\n");
  };
});
