(function(){

    angular.module('clist').controller('PostListController', ['$scope', '$location', 'PostService', function($scope, $location, PostService){

        $scope.PostList = [];
        $scope.SelectedSection = 'cpg';
        $scope.SelectedPost = '';

        function init(){

            PostService.getPostsBySection($scope.SelectedSection)
                .success(function(result){
                    $scope.PostList = result;
                })
                .error(function(error){
                   console.log(error.message);
                });
        }

        init();

        $scope.buttonAction = function(post){
            PostService.getPostByUrl(post)
                .success(function(result){
                    $scope.SelectedPost = result
                })
                .error(function(error){
                    console.log(error.message);
                })
        }

    }]);

}());