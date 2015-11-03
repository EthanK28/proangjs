/**
 * Created by Eunseok on 2015-11-03.
 */
var controllersModule = angular.module("exampleApp.Controllers", []);

controllersModule.controller("dayCtrl", function ($scope, days) {
    $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function ($scope, days) {
    $scope.day = days.tomorrow;
});