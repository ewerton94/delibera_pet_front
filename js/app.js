var MyApp = angular.module('MyApp');

MyApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider.
            when('/', {
                templateUrl : 'home.html',
                controller : 'HomeCtrl'
            }).
            when('/eventos/tipos/:evento_id?', {
                templateUrl : 'home.html',
                controller : 'EventosCtrl'
            }).
            when('/eventos/deliberacoes/:evento_id', {
                templateUrl : 'deliberacoes.html',
                controller : 'DeliberacoesPorEventosCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
        /*$locationProvider.html5Mode(true);*/
        
    }]);


MyApp.config(['$httpProvider',function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

}]);



MyApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});