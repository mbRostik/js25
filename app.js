var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	$scope.name = 'Eren';
	$scope.surname = 'Jager';
	$scope.age = 25;
});