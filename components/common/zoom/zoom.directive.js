define(["app"], function (module) {

    var zoomImage = {

        restrict: "EA",
        scope: {
            data: "="
        },
        template: `<div class="row"></div>`,
        link: function (scope, element, attr, ctrl) {
            this.zoom = function () {
                console.log("zoomed");
            }
        }
    };

    angular
        .module(module.HOME)
        .component('zoomImage', zoomImage);
});