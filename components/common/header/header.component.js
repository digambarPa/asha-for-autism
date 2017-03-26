define(["app", "angular"], function (module, angular) {

    var headerComponent = {
        bindings:{
            data: "="
        },
        template: `<div>
                     </div>`,
        controller: [function () {
            var self = this;
        }]
    }

    angular.module(module.HEADER).component('headerComponent', headerComponent);
});
