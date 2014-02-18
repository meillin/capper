define(['app'], function (app) {

	var imgPath = '../../img/';

    app.register.controller('IndexController', function ($scope) {
		$scope.pagetitle = "INDEX";
    });

    app.register.controller('testController', function($scope) {
		$scope.logoUrl = imgPath + 'bower.png';
	});

    app.register.controller('SassController', ['$scope', function($scope){
		$scope.logoUrl = imgPath + 'sass.png';
    }]);

	app.register.controller('AngularController', function($scope){
		$scope.logoUrl = imgPath + 'angularjs.jpg';
	});

	app.register.controller('GruntController', ['$scope', function($scope){
		$scope.logoUrl = imgPath + 'grunt.png';
	}]);

	app.register.controller('BackboneController', ['$scope', function($scope){
		$scope.logoUrl = imgPath + 'backbone.png';
	}]);

	app.register.controller('SublimeController', ['$scope', function($scope){
		$scope.logoUrl = imgPath + 'Sublimetext.png';
	}]);
});