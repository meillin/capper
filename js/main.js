require.config({
    
	// alias libraries paths
    paths: {
        'angular': '../bower_components/angular/angular.min',
        'angular-route': '../bower_components/angular-route/angular-route.min',
        'async': '../bower_components/requirejs-plugins/src/async',
        'angularAMD': '../bower_components/angularAMD/angularAMD.min',
        'angular-animate': '../bower_components/angular-animate/angular-animate.min',
        'ngload': '../bower_components/angularAMD/ngload.min',

        'IndexController' : 'controller/index_ctrl',
        'AboutController': 'controller/about_ctrl'

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