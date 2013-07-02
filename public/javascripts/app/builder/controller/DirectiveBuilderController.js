(function () {
    var builder = angular.module("builder");
    builder.controller("DirectiveBuilderController",[
        '$scope',
        'DirectiveService',
        function($scope,DirectiveService){
            $scope.directive = DirectiveService;

        }
    ]);
})();
