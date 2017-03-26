define(["app", "angular", "angular-ui-router"], function (module, angular) {

    var aboutComponent = {

        bindings: {
            data: "="
        },

        template: `<div>About us</div>`,

        controller: function () {
            this.login = function () {
                console.log("User loggedin successfully");
            }
        }
    };

    angular
        .module(module.ABOUT)
        .component('aboutComponent', aboutComponent)
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("about", {
                    url: "/about",
                    component: 'aboutComponent'
                });

            $urlRouterProvider.otherwise('/about');
        });
});