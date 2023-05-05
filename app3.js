var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	$scope.workers = [
		{ name: 'Mikasa', age: 19, salary: 2000 },
		{ name: 'Rainer', age: 22, salary: 30000 },
		{ name: 'Annie', age: 21, salary: 15000 },
	];
});
