require.config({
    
	// alias libraries paths
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'async': '../bower_components/requirejs-plugins/src/async',
        'angularAMD': '../bower_components/angularAMD/angularAMD',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'ngload': '../bower_components/angularAMD/ngload',

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