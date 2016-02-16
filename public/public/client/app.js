(function(){

    var app  = angular.module('clist', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

        $routeProvider
            .when('/', {
                controller:'PostListController',
                templateUrl:'client/views/PostListPage.html'
            })
            .when('/post', {
                controller:'PostListController',
                templateUrl:'client/views/PostPage.html'
            })
            .otherwise({redirectTo: '/'});

    }]);

    app.filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
    }]);



}());