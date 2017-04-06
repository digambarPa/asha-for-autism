define(["app", "angular"], function (module, angular) {

    var eventsComponent = {
        template: `<div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="events event-bg-left"></div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="events event-bg-right"></div>
                        </div>
                   </div>
                   <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="info event-info info-left">
                                <h3 style="text-align: center">Light It Up BLUE!!</h3>
                                <p>The seventh annual World Autism Awareness Day is April 2, 2014. Every year, autism organizations around the world celebrate the day with unique fundraising and awareness-raising events.Many landmarks will be bathed in blue light to draw attention to the cause. </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="info event-info info-right">
                                <p>To know more about ASHA's Events and to share your events, photos and Autism Kindness Acts please click on the below Facebook link</p>
                                <p>
                                   <a href="https://www.facebook.com/pages/World-Autism-Awareness-Day-Bangalore/591896357553281" target="_blank">
                                        <img src="assets/common/facebook.png" alt="" width="30" height="30" style="margin-left: 100px;">
                                   </a>
                                </p>
                            </div>
                        </div>
                   </div>

                   <div class="row">
                        <div class="col-md-12">
                            <div class="info">

                            <h3 class="center-align">Summer camp at ASHA</h3>
                            <p>Come and join the summer camp at ASHA where children with autism and other developmental disabilities will learn lots of fun things. Yoga, games, activities to increase their language and communication, and social skills activities are all on offer.</p>
                            <ul>
                                <li><strong>Date - 14th April 2014 to 25th April 2014</strong></li>
                                <li><strong>Time - 10:30am to 12:30pm</strong></li>
                                <li><strong>Registration fee - Rs. 2000/-</strong></li>
                                <li><strong>Venue - Assessment, Training and Guidance Centre, #294, 5th main road, Mahalakshmi Layout, Bangalore 560086</strong></li>
                            </ul>
                            </div>
                        </div>
                   </div>

                   `,

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
