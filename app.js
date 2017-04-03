define(["angular", "angular-ui-router", "angular-bootstrap-ui"], function (angular) {
    /* creating app modules */
    var module = {};
    module.COMMUNICATOR = "communicator";
    module.HEADER = "header";
    module.ABOUT = "about";
    module.AUTISM = "autism";
    module.CONTACTS = "contacts";
    module.EVENTS = "events";
    module.HELP = "help";
    module.SERVICES = "services";
    module.HOME = "home";

    // Creating all modules
    angular.module(module.COMMUNICATOR, []);
    angular.module(module.HEADER, ["ui.bootstrap"]);
    angular.module(module.ABOUT, []);
    angular.module(module.AUTISM, []);
    angular.module(module.CONTACTS, []);
    angular.module(module.EVENTS, []);
    angular.module(module.HELP, []);
    angular.module(module.SERVICES, []);
    angular.module(module.HOME, ["ui.router", "ui.bootstrap", module.COMMUNICATOR, module.HEADER, module.ABOUT, module.AUTISM, module.CONTACTS, module.EVENTS, module.HELP, module.SERVICES]);

    return module;
});