var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.languages = ['html', 'css', 'js', 'php'];

    $scope.removeLanguage = function (index) {
        $scope.languages.splice(index, 1);
    }

});