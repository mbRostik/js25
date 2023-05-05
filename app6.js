var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	
	$scope.languages = ['html', 'css', 'js', 'php'];
	$scope.changeLanguage = function () {
		$scope.languages[3] = 'sql';
	};
});
