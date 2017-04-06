define(["app", "angular"],
    function (module, angular) {

        var helpComponent = {
            template: `<div class="row">

            <div class="col-sm-6">
                <div class="help"></div>
                <div class="info info-left trustee-info">
                    <h3>There are lots of reasons to volunteer and lots of work that you can contribute to -</h3>
                    <p>Increasing awareness by -</p>
                    <ul>
                        <li>Conducting awareness programmes, within the company and society.</li>
                        <li>Joining us in awareness programmes that we are participating / organizing.</li>
                        <li>Directly working with the children - these children learn best when taught on an individual basis.</li>
                        <li>You can volunteer time/talent to teach children/teachers music, art, craft, painting, sport activities.And if you work in the software field, you can help by developing simple games and other education software for autism.</li>
                        <li>You can provide a short respite to the parent on weekends by spending time with them reading/playing/cooking or taking them out or being with them in school.</li>
                        <li>Raising funds to support the education of these students.</li>
                        <li>All that you need is enthusiasm and motivation, and the sky is the limit in terms of the opportunities for you here at ASHA.</li>
                    </ul>
                </div>
                <div></div>
            </div>

            <div class="col-sm-6">
                <div class="info mission">
                    <p>To enrich your own life by enriching other's.</p>
                    <p>After all,"The purpose of human life is to serve, show compassion and the will to help others."</p>
                    <p style="text-align: center">- Albert Schweitzer</p>
                </div>

                <div class="info goals">
                    <p>Please join hands with us and support our cause to bring in a bright future for our very special friends. Your generous gesture will make their dream a reality.</p>
                    <p>Donations are eligible for exemption under Section 80G. ASHA is registered under Foreign Contribution Regulation Act (FCRA).</p>
                    <p>Donations are eligible for 50% deduction under the section 80G of Indian Income Tax Act. ASHA is registered under Foreign Contribution Regulation Act (FCRA)</p>
                    <p>Cheques / Demand Drafts may be made in the name of 'ASHA Charitable Trust'</p>
                </div>
            </div>
        </div>`,

            controller: ["$rootScope", function ($rootScope) {

            }]
        };

        angular.module(module.HELP)
            .component('helpComponent', helpComponent)
            .config(function ($stateProvider) {
                $stateProvider
                    .state("help", {
                        url: "/help",
                        component: 'helpComponent'
                    });
            });
    });
