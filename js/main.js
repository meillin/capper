require.config({
    
	// alias libraries paths
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min',
        'async': 'bower_components/requirejs-plugins/src/async',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min',
        'angular-animate': 'bower_components/angular-animate/angular-animate.min',
        'ngload': 'bower_components/angularAMD/ngload.min',

        'MovieController': 'app/controllers/movie_ctrl',
        'ShopController': 'app/controllers/shop_ctrl',
        'AboutController': 'app/controllers/about_ctrl',

        'ShopService': 'app/services/shop_service',
        'MovieService': 'app/services/movie_service'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-animate': ['angular']
    },

    // kick start application
    deps: ['app']
});