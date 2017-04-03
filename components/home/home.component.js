define(["app", "angular", "jquery", "angular-bootstrap-ui"],
    function(module, angular, $) {

        var homeComponent = {
            template: `<div>
            <div class="row">
            <div class="col-sm-9 col-xs-12">
              <div style="height: 405px">
                <div uib-carousel active="$ctrl.active" interval="$ctrl.myInterval" no-wrap="$ctrl.noWrapSlides">
                  <div uib-slide ng-repeat="slide in $ctrl.slides track by slide.id" index="slide.id">
                    <img ng-src="{{slide.image}}" style="height:405px; width:100%; margin:auto;">
                    <div class="carousel-caption">
                      <h4>Slide {{slide.id}}</h4>
                     <!-- <p>{{slide.text}}</p>-->
                    </div>
                  </div>
                </div>
              </div>
              <div style="background-color: #8C489F; padding: 15px; color: #C3C3E5; margin-top: 15px;">
              <ul>
                    <li>ASHA began its services in the year 1995 with the intention of creating a world class learning environment for persons with Autism Spectrum Disorder (ASD).</li>
                    <li> ASHA's journey has been extremely challenging in the last eighteen years AND also extremely fruitful</li>
                    <li>Our mission is to provide appropriate interventions to persons with ASD that will enable personal independence and social inclusion, thus making them contributing members of society.</li>
                    <li>The programs at ASHA are well thought out and aim at providing end to end solutions to the many difficulties that families with autistic children face. For more information, check 'Services'.</li><li> Personalized attention, thorough evaluation and well- rounded curriculum are some of the important features of this organization.</li>
              </ul>
              </div>
              </div>

              <div class="col-sm-3 col-xs-12">
                <div class="thumbnail thumbnail_1" ng-click="$ctrl.open('../assets/common/facebook.png', 'lg')">

                </div>

                <div class="thumbnail thumbnail_2" ng-click="$ctrl.open('../assets/common/facebook.png', 'lg')">

                </div>

                <div class="thumbnail thumbnail_3" ng-click="$ctrl.open('../assets/common/facebook.png', 'lg')">

                </div>

                <div class="thumbnail thumbnail_4" ng-click="$ctrl.open('../assets/common/facebook.png', 'lg')">

                </div>

                <div class="thumbnail thumbnail_5" ng-click="$ctrl.open('../assets/common/facebook.png', 'lg')">

                </div>

                <div class="thumbnail thumbnail_6" ng-click="$ctrl.open('../assets/common/facebook.png', 'lg')">

                </div>
            </div>
            </div>
            </div>
            </div>`,
            controller: ["$uibModal", "$log", "$document", function($uibModal, $log, $document) {
                var self = this;
                self.myInterval = 5000;
                self.noWrapSlides = false;
                self.active = 0;
                var slides = self.slides = [];
                var currIndex = 0;
                self.items = ['item1', 'item2', 'item3'];
                self.animationsEnabled = true;

                self.open = function (bgUrl, size, parentSelector) {
                    var parentElem = parentSelector ?
                        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
                    var modalInstance = $uibModal.open({
                        animation: self.animationsEnabled,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'myModalContent.html',
                        size: size,
                        appendTo: parentElem,
                        resolve: {
                            items: function () {
                                return self.items;
                            }
                        }
                    });
                    //$('.model-container').css('background-image', 'url("assets/carousel/1.jpg")');

                };




                self.addSlide = function() {
                    var newWidth = 600 + slides.length + 1;
                    slides.push({
                        image: 'assets/carousel/' + currIndex + '.jpg',
                        text: ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4'][slides.length % 4],
                        id: currIndex++
                    });
                };

                self.randomize = function() {
                    var indexes = generateIndexesArray();
                    assignNewIndexesToSlides(indexes);
                };

                for (var i = 0; i < 6; i++) {
                    self.addSlide();
                }
                // Randomize logic below

                function assignNewIndexesToSlides(indexes) {
                    for (var i = 0, l = slides.length; i < l; i++) {
                        slides[i].id = indexes.pop();
                    }
                }

                function generateIndexesArray() {
                    var indexes = [];
                    for (var i = 0; i < currIndex; ++i) {
                        indexes[i] = i;
                    }
                    return shuffle(indexes);
                }

                function expandThumbnail(path){

                }

                // http://stackoverflow.com/questions/962802#962890
                function shuffle(array) {
                    var tmp, current, top = array.length;

                    if (top) {
                        while (--top) {
                            current = Math.floor(Math.random() * (top + 1));
                            tmp = array[current];
                            array[current] = array[top];
                            array[top] = tmp;
                        }
                    }

                    return array;
                }

            }]

        };

        angular.module(module.HOME)
            .component('homeComponent', homeComponent)
            .config(function($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state("home", {
                        url: "/home",
                        component: 'homeComponent'
                    });

                $urlRouterProvider.otherwise('/home');
            });
    });