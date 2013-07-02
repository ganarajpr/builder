(function () {
    var builder = angular.module("builder");
    builder.factory("DirectiveService", [
        function () {
            return {
                name : "",
                priority : 0,
                terminal : true,
                replace : false,
                scope : false,
                restrict : "A",
                templateUrl  : ""

            };
        }
    ]);
})();


