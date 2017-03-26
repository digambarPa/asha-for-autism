define(["app", "angular"],
    function (module, angular) {

        var servicesComponent = {
            template: `<div> SERVICES COMPONENT
                </div>`,

            controller: [function () {

            }]
        };

        angular.module(module.HOME)
            .component('servicesComponent', servicesComponent)
            .config(function ($stateProvider) {
                $stateProvider
                    .state("services", {
                        url: "/services",
                        component: 'servicesComponent'
                    });
            });
    });