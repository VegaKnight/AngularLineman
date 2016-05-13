angular.module("app").config(function ($routeProvider) {

    $routeProvider.when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginController'
    });
    
    $routeProvider.when('/iglesias', {
        templateUrl: 'iglesias.html',
        controller: 'IglesiaController'
    });

    $routeProvider.when('/sitios', {
        templateUrl: 'sitios.html',
        controller: 'SitiosController'
    });

    /*$routeProvider.when('/restaurantes', {
        templateUrl: 'restaurantes.html',
        controller: 'RestaurantesController'
    });*/
    $routeProvider.when('/clima', {
        templateUrl: 'clima.html',
        controller: 'ClimaController'
    });

    $routeProvider.otherwise({redirectTo: '/login'});

});
