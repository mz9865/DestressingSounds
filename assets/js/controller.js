var app = angular.module('destress', [])
app.controller('destressController', function($scope) {
    $scope.name = "Mason";
    $scope.imageRootPath = "../images/rain.jpg" // should the path be from the .html file or this file
    $scope.image = "rain.jpg";
})