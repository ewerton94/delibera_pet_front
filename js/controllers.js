var deliberacoesControllers = angular.module('deliberacoesControllers',[]);
var base_url = "localhost:8000";

var GetTematicas = function ($scope, $http) {
    $scope.tematicas = [];
    $http.get('http://127.0.0.1:8000/' + 'tematicas').then(function (data) {
        $scope.tematicas = data.data;
        
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
    $http.get('http://127.0.0.1:8000/' + 'eventos/edicoes' + evento_id).then(function (data) {
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
    $http.get('http://127.0.0.1:8000/' + 'eventos/deliberacoes/' + evento_id).then(function (data) {
            $scope.evento = data.data;
            if (!$scope.evento.deliberacoes.length){
                $scope.errors.push("Sem deliberações encontradas para o evento selecionado");
            }
            
        }, function(data) {
            console.log("ERRO em GETEdicoesPorTipo");
            $scope.errors.push(data.data.detail);           
            
        });
}
var GetEdicoes = function ($scope, $http) {
    $scope.eventos = [];
    $http.get('http://127.0.0.1:8000/' + 'eventos/edicoes' ).then(function (data) {
            $scope.eventos = data.data;
            
        }, function(data) {
            $scope.errors.push(data.data.detail);           
            
        });
}
var GetTipos = function ($scope, $http) {
    $scope.tipos_eventos = [];
    $http.get('http://127.0.0.1:8000/' + 'eventos/tipos').then(function (data) {
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

deliberacoesControllers.controller('get_tipos_eventos', ['$scope', '$http', '$location','$window','$timeout',
    function ($scope, $http, $location,$window,$timeout) {
        

        $scope.tipos_eventos = [];
        $http.get('http://127.0.0.1:8000/' + 'eventos/tipos').then(function (data) {
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
        $http.get('http://127.0.0.1:8000/' + 'eventos/tipos').then(function (data) {
            $scope.tipos_eventos = data.data;
            
        }, function(data) {
            console.log("ERRO em HomeController - Eventos")
            $scope.errors.push(data.data.detail);           
            
        });
        
        $scope.user = {}
        
    }]);
    