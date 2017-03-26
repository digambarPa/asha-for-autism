define(["app", "angular"], function (module, angular) {

    var contactsComponent = {

        template: `<div> Contact us
                    </div>
                    `,

        controller: [function () {

        }]
    };

    angular
        .module(module.CONTACTS)
        .component('contactsComponent', contactsComponent)
        .config(function ($stateProvider) {
            $stateProvider
                .state("contacts", {
                    url: "/contacts",
                    component: 'contactsComponent'
                });
        });
});
