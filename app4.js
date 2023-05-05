var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
	$scope.name = 'Eren';
	$scope.changeName = function () {
		$scope.name = 'Armin';
	}
});