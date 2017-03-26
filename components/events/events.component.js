define(["app", "angular"], function (module, angular) {

    var eventsComponent = {
        template: `<div> Events
                   </div>`,

        controller: [function () {
        }]
    };

    angular
        .module(module.HOME)
        .component('eventsComponent', eventsComponent)
        .config(function ($stateProvider) {
            $stateProvider
                .state("events", {
                    url: "/events",
                    component: 'eventsComponent'
                });
        });
});
