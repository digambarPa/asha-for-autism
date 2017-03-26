define(["app", "angular"],
    function (module, angular) {

        var homeComponent = {
            template: `<div> HOME COMPONENT
                </div>`,

            controller: [function () {

            }]
        };

        angular.module(module.HOME)
            .component('homeComponent', homeComponent)
            .config(function ($stateProvider) {
                $stateProvider
                    .state("home", {
                        url: "/home",
                        component: 'homeComponent'
                    });
            });
    });