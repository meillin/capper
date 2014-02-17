define(['app'], function (app) {
    app.register.controller('IndexController', function ($scope) {
		$scope.pagetitle = "INDEX";
    });

    app.register.controller('testController', function($scope) {
    	$scope.pagetitle = "testController"
    })
});