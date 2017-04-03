require.config({
    paths: {
        "jquery": "lib/jquery/jquery-1.11.2",
        "angular": "lib/angular/angular-core/angular.min-1.6",
        "angular-ui-router": "lib/angular/angular-ui-router/angular-ui-router",
        "angular-bootstrap-ui": "lib/angular/angular-bootstrap-ui/ui-bootstrap-tpls-2.5.0.min",

        // common component
        "communicator": "communicator/communicator",
        "header": "components/common/header/header.component",
        "footer": "components/common/footer/footer.component",
        "about": "components/about/about.component",
        "autism": "components/autism/autism.component",
        "contacts": "components/contacts/contacts.component",
        "events": "components/events/events.component",
        "help": "components/help/help.component",
        "home": "components/home/home.component",
        "services": "components/services/services.component",
        "app": "app"

    },
    shim: {
        "angular-ui-router": {deps: ["angular"]},
        "angular-bootstrap-ui": {deps: ["angular"]},
        "angular": {exports: "angular"}
    },
    waitSeconds: 0
});

/* entry point of our app */

require(["run", "app", "angular", "home", "header", "footer", "about", "autism", "contacts", "events", "help", "services"], function (run, application, angular) {
    angular.bootstrap(document.body, [application.HOME]);
});

