define(['angularAMD', 'angular-route', 'angular-animate'], function (angularAMD) {
    var app = angular.module("capper", ['ngRoute']);
    /**
     * Configure Angular ngApp with route and cache the needed providers
     */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
			when("/about",
					angularAMD.route({
					templateUrl: 'template/about.html',
					controller: 'AboutController'
			})).
			when("/",
				angularAMD.route({
					templateUrl: 'template/main.html',
					controller: 'IndexController'
			})).
			otherwise({redirectTo: ''});
    }]);

     // Bootstrap Angular when DOM is ready
    angularAMD.bootstrap(app);

    return app;
});