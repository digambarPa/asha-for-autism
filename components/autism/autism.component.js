define(["app", "angular"], function (module, angular) {

    var autismComponent = {
        template: `<div>Austism</div>`,

        controller: [function () {
        }]
    };

    angular
        .module(module.AUTISM)
        .component('autismComponent', autismComponent)
        .config(function ($stateProvider) {
            $stateProvider
                .state("autism", {
                    url: "/autism",
                    component: 'autismComponent'
                });
        });
});