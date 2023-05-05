var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.langs = {
        name: 'Erwin',
        surname: 'Smith',
        age: '29'
    };
});