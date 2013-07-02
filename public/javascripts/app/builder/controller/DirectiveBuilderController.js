(function () {
    var builder = angular.module("builder");
    builder.controller("DirectiveBuilderController",[
        '$scope',
        'DirectiveService',
        function($scope,DirectiveService){
            $scope.directive = DirectiveService;
            $scope.scopeType = "same";

            $scope.$watch("element+attribute+class+comment",function(n,o){
                if(n===o){
                    return;
                }
                $scope.directive.restrict = "";
                if($scope.element){
                    $scope.directive.restrict+= "E";
                }
                if($scope.attribute){
                    $scope.directive.restrict+= "A";
                }
                if($scope.class){
                    $scope.directive.restrict+= "C";
                }
                if($scope.comment){
                    $scope.directive.restrict+= "M";
                }
            });
        }
    ]);
})();
