var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
	
	$scope.langs = ["html", "css", "js", "php"];

	$scope.cities = {
		"Lisabon": "Potyhalia",
		"Tokio": "Iaponia",
		"Kuiv": "Ykraina"
	};
});
