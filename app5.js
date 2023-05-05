var app = angular.module('myApp', []);

app.controller('myController', function ($scope) {
	$scope.name = 'Eren';
	$scope.surname = 'Jager';
	$scope.age = 25;

	$scope.changeName = function () {
		$scope.name = 'Sasha';
	};

	$scope.changeSurname = function () {
		$scope.surname = 'Braws';
	};

	$scope.changeAge = function () {
		$scope.age = 30;
	};
});
