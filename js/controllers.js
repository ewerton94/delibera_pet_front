var deliberacoesControllers = angular.module('deliberacoesControllers',[]);
//var base_url = "http://localhost:8000/";

var base_url = 'http://pet.ufal.br/deliberacoes/api/'

var GetTematicas = function ($scope, $http) {
    $scope.tematicas = [];
    $http.get(base_url + 'tematicas').then(function (data) {
        $scope.tematicas = data.data;
        console.log($scope.tematicas);
    }, function(data) {
        console.log("ERRO em HomeController - Temáticas")
        $scope.errors.push(data.data.detail);           
        
    });
}
var GetEdicoesPorTipo = function ($scope, $http, evento_apelido) {
    $scope.eventos = [];
    var evento_id = '';
    if (evento_apelido.length){
        evento_id = '?tipo_evento__apelido=' + evento_apelido;
    }
    $http.get(base_url + 'eventos/edicoes' + evento_id).then(function (data) {
            $scope.eventos = data.data;
            if (!$scope.eventos.length){
                $scope.errors.push("Sem edições encontradas para o tipo de evento selecionado");
            }
            
        }, function(data) {
            console.log("ERRO em GETEdicoesPorTipo");
            $scope.errors.push(data.data.detail);           
            
        });
}

var GetDeliberacoesPorEventos = function ($scope, $http, evento_id) {
    $scope.evento = {};
    $http.get(base_url + 'eventos/deliberacoes/' + evento_id).then(function (data) {
            $scope.evento = data.data;
            if (!$scope.evento.deliberacoes.length){
                $scope.errors.push("Sem deliberações encontradas para o evento selecionado");
            }
            
        }, function(data) {
            console.log("ERRO em GETEdicoesPorTipo");
            $scope.errors.push(data.data.detail);           
            
        });
}
var GetDeliberacoesPorTematica = function ($scope, $http, tematica_id) {
    $scope.tematica = {};
    $http.get(base_url + 'tematicas/' + tematica_id + '/deliberacoes').then(function (data) {
            $scope.tematica = data.data;
            console.log('http://pet.ufal.br/deliberacoes/api' + 'tematicas/' + tematica_id+'/deliberacoes')
            if (!$scope.tematica.eventos.length){
                $scope.errors.push("Sem deliberações encontradas para a temática selecionada");
            }
            console.log($scope.tematica);
            
        }, function(data) {
            console.log("ERRO em GetDeliberacoesPorTematica");
            $scope.errors.push(data.data.detail);           
            
        });
}
var GetEdicoes = function ($scope, $http) {
    $scope.eventos = [];
    $http.get(base_url + 'eventos/edicoes' ).then(function (data) {
            $scope.eventos = data.data;
            
        }, function(data) {
            $scope.errors.push(data.data.detail);           
            
        });
}
var GetTipos = function ($scope, $http) {
    $scope.tipos_eventos = [];
    $http.get(base_url + 'eventos/tipos').then(function (data) {
            $scope.tipos_eventos = data.data;
            
        }, function(data) {
            console.log("ERRO em HomeController - GetTopos")
            $scope.errors.push(data.data.detail);           
            
        });
}




deliberacoesControllers.controller('EventosCtrl', ['$scope', '$http', '$location','$window','$timeout', '$routeParams',
    function ($scope, $http, $location, $window, $timeout, $routeParams) {
        $scope.errors = [];
        GetTematicas($scope, $http);
        

        GetEdicoesPorTipo($scope, $http, $routeParams.evento_id);
        
        $scope.user = {}
        
    }]);
    
deliberacoesControllers.controller('DeliberacoesPorEventosCtrl', ['$scope', '$http', '$location','$window','$timeout', '$routeParams',
    function ($scope, $http, $location, $window, $timeout, $routeParams) {
        $scope.errors = [];
        GetTematicas($scope, $http);
        GetDeliberacoesPorEventos($scope, $http, $routeParams.evento_id);
        $scope.user = {}
        
    }]);

deliberacoesControllers.controller('DeliberacoesPorTematicaCtrl', ['$scope', '$http', '$location','$window','$timeout', '$routeParams',
    function ($scope, $http, $location, $window, $timeout, $routeParams) {
        $scope.errors = [];
        GetTematicas($scope, $http);
        GetDeliberacoesPorTematica($scope, $http, $routeParams.tematica_id);
        $scope.user = {}
        
    }]);

deliberacoesControllers.controller('get_tipos_eventos', ['$scope', '$http', '$location','$window','$timeout',
    function ($scope, $http, $location,$window,$timeout) {
        

        $scope.tipos_eventos = [];
        $http.get(base_url + 'eventos/tipos').then(function (data) {
            $scope.tipos_eventos = data.data;
            
        }, function(data) {
            console.log("ERRO em HomeController - Eventos")
            $scope.errors.push(data.data.detail);           
            
        });
        
        $scope.user = {}
        
    }]);

deliberacoesControllers.controller('HomeCtrl', ['$scope', '$http', '$location','$window','$timeout', '$routeParams',
    function ($scope, $http, $location, $window, $timeout, $routeParams) {
        
        $scope.errors = [];
        

        GetTematicas($scope, $http);
        GetEdicoes($scope, $http);
        
        $scope.user = {}
        
    }]);

deliberacoesControllers.controller('get_tipos_eventos', ['$scope', '$http', '$location','$window','$timeout',
    function ($scope, $http, $location,$window,$timeout) {
        $scope.errors = [];
        GetTipos($scope, $http);
        
    }]);

deliberacoesControllers.controller('EventosController', ['$scope', '$http', '$location','$window','$timeout', '$routeParams',
    function ($scope, $http, $location,$window,$timeout, $routeParams) {
        

        $scope.tipos_eventos = [];
        $http.get(base_url + 'eventos/tipos').then(function (data) {
            $scope.tipos_eventos = data.data;
            
        }, function(data) {
            console.log("ERRO em HomeController - Eventos")
            $scope.errors.push(data.data.detail);           
            
        });
        
        $scope.user = {}
        
    }]);
    
