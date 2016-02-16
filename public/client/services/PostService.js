(function(){

    angular.module('clist').factory('PostService', ['$http', function($http){

        var PostService  = {};
        var api  = 'http://test.local:3000/'

        PostService.getPostsBySection = function(section){

            return $http({
                method: 'GET',
                url: api + 'posts/' + section
            });

        }

        PostService.getPostByUrl = function(post){

            return $http({
                method: 'POST',
                url: api + 'post',
                data: JSON.stringify(post),
                headers: {'Content-Type': 'application/json'}
                //headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
            })

        }

        PostService.SelectedPost = '';

        return PostService;

    }]);

}());