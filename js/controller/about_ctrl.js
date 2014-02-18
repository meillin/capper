define(['app'], function (app) {
    app.register.controller('AboutController', function ($scope) {
       $scope.init = function(){
			$scope.pagetitle = "ABOUT US";
       };
    });
});