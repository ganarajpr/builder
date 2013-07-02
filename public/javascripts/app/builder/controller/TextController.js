(function () {
    var builder = angular.module("builder");
    builder.controller("TextController",[
        '$scope',
        'DirectiveService',
        function($scope,DirectiveService){
            $scope.directive = DirectiveService;
        }
    ]);
})();
