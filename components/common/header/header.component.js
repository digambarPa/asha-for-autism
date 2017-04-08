define(["app", "angular"], function (module, angular) {

    var headerComponent = {
        bindings: {},
        template: `
        <div class="row header">
        	<div class="col-md-9 col-sm-12 col-xs-12">
        		<div class="row">
        			<div class="col-md-12 col-sm-10 col-xs-9">
        				<h2 class="heading" style="text-align: left; margin-top: 10px;"><strong>Academy for Severe Handicaps and Autism</strong></h2>
        			</div>
        			<div class="col-xs-3 col-sm-2 hidden-md hidden-lg" style="height: 80px;">
        				<a ui-sref="home">
        					<div class="logo-mobile"></div>
        					<div style="margin-left: 10px;"><strong>ASHA</strong></div>
        				</a>
        			</div>
        		</div>
        		<div class="row">
        			<div class="col-xs-12 col-md-12">
						<div>
							<nav class="navbar navbar-default" role="navigation">
								<div class="navbar-header visible-xs">
									<button type="button" class="navbar-toggle" ng-click="$ctrl.isNavCollapsed = !$ctrl.isNavCollapsed">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
									<a class="navbar-brand">MENU</a>
								</div>
								<div class="collapse navbar-collapse" uib-collapse="$ctrl.isNavCollapsed">
									<ul class="nav navbar-nav">
										<li><a ui-sref="home" ng-click="$ctrl.collapseNav()">Home</a></li>
										<li><a ui-sref="about" ng-click="$ctrl.collapseNav()">About</a></li>
										<li><a ui-sref="autism" ng-click="$ctrl.collapseNav()">Austim</a></li>
										<li><a ui-sref="services" ng-click="$ctrl.collapseNav()">Services</a></li>
										<li><a ui-sref="events" ng-click="$ctrl.collapseNav()">Events</a></li>
										<li><a ui-sref="help" ng-click="$ctrl.collapseNav()">Help</a></li>
										<li><a ui-sref="contacts" ng-click="$ctrl.collapseNav()">Contacts</a></li>
									</ul>
								</div>
							</nav>
						</div>
        			</div>
        		</div>
        		</div>

        		<div class="col-xs-3 col-sm-2 col-md-3 hidden-xs hidden-sm">
        			<a ui-sref="home">
        				<div style="margin-left: 50px">
        					<div class="logo"></div>
        					<div style="margin-left: 29px; font-size: 20px;"><strong>ASHA</strong></div>
        				</div>
        				</a>
        		</div>

        	</div>
        </div>`,
        controller: ["$scope", "$timeout", function ($scope, $timeout) {
            var self = this;
			self.isNavCollapsed = true;
			self.collapseNav = function(){
				self.isNavCollapsed = true;
			}
        }]
    }

    angular.module(module.HEADER).component('headerComponent', headerComponent);
});
