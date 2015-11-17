angular.module('app', ['uiSwitch'])

.controller('MyController', function($scope, $timeout) {
  $scope.enabled = true;
  $scope.onOff = true;
  $scope.yesNo = true;
  $scope.disabled = true;
	
	$scope.dynamicDisabled = true;
	$timeout(function() {
		$scope.dynamicDisabled = false;
	}, 1000);

  $scope.changeCallback = function() {
    console.log('This is the state of my model ' + $scope.enabled);
  };
});
