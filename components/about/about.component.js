define(["app", "angular", "angular-ui-router"], function (module, angular) {

    var aboutComponent = {

        bindings: {
            data: "="
        },

        template: `<div class="row">

            <div class="col-sm-6">
                <div class="about"></div>
                <div class="info info-left trustee-info">
                    <h3>The Board Of Trustees Consists of:</h3>
                    <ul>
                        <li>Mrs. Chandra Singh: <span>Chairman</span></li>
                        <li>Sri.J.R. Deshpande: <span>Secretary</span></li>
                        <li>Sri.D.V.Seshadri Iyer: <span>Trustee</span></li>
                        <li>Dr.T.S.Satyavati: <span>Trustee</span></li>
                        <li>Mrs. Jayashree Ramesh: <span>Trustee / Director</span></li>
                    </ul>
                </div>
                <div></div>
            </div>

            <div class="col-sm-6">
                <div class="info mission">
                    <h2 style="text-align: center">Mission</h2>
                    <p>We endeavor to render exceptional love, care, hope and educational assistance to children with special needs to help them develop and utilize their potential.</p>
                </div>

                <div class="info goals">
                    <h3 style="text-align: center">Goals</h3>
                    <ul><li>To provide education and training to children with special needs To develop well informed and trained parents and families.
                        </li><li> To create awareness in the community about the disability To facilitate effective parent-professional collaboration.    <p></p>
                    </li></ul>
                </div>
            </div>
        </div>`,

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