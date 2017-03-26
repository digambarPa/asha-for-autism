define(["app", "angular"],
    function (module, angular) {

        var helpComponent = {
            template: `<div> Help COMPONENT
                </div>`,

            controller: ["$rootScope", function ($rootScope) {

            }]
        };

        angular.module(module.HELP)
            .component('helpComponent', helpComponent)
            .config(function ($stateProvider) {
                $stateProvider
                    .state("help", {
                        url: "/help",
                        component: 'helpComponent'
                    });
            });
    });
