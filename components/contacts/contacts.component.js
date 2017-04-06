define(["app", "angular"], function (module, angular) {

    var contactsComponent = {

        template: `<div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="contact-img"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="info contact-info">
                                <h3>ASHA (ACADEMY FOR SEVERE HANDICAPS AND AUTISM)</h3>
                                <ul>
                                    <li>Address: L-76/A, (Opposite to L-50) Kirloskar Colony,</li>
                                    <li>HBCS 3rd Stage, 4th Block, Basaveswaranagar,</li>
                                    <li>Bangalore -- 560079.</li>
                                    <li>Tel: 23225279 / 23230357</li>
                                    <li>Website: www.ashaforautism.com</li>
                                    <li>General - info@ashaforautism.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="info contact-info">
                                <ul>
                                    <li>Jayashree Ramesh : jayashree@ashaforautism.com</li>
                                    <li>Jyoti Rajappa : jyoti@ashaforautism.com</li>
                                    <li>Anand Krishnan : anand.atg@ashaforautism.com</li>
                                    <li>Kannika Iyengar : kannika.atg@ashaforautism.com</li>
                                    <li>Kavita Shah : kavita.atg@ashaforautism.com</li>
                                </ul>
                            </div>
                        </div>
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
