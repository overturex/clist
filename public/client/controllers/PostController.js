(function(){

    angular.module('clist').controller('PostController', ['$scope', 'PostService', function($scope, PostService){

        $scope.Post = '';

        function init(){

            PostService.getPostByUrl(PostService.SelectedPost.Url)
                .success(function(result){
                    console.log(result);
                })
                .error(function(error){
                   console.log(error.message);
                });

        }

        init();

    }]);


}());