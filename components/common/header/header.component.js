define(["app", "angular"], function (module, angular) {

    var headerComponent = {
        bindings: {},
        template: `
        <div class="row header">
        	<div class="col-md-11 col-sm-10 col-xs-9"><h2 class="heading" style="text-align: center; margin-top: 10px;"><strong>Academy for Severe Handicaps and Autism</strong></h2></div>
        </div>
        <div class="row">
        <div class="col-md-12">
        <div>
	<nav class="navbar navbar-default" role="navigation">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" ng-click="$ctrl.isNavCollapsed = !$ctrl.isNavCollapsed">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" ui-sref="home">Home</a>
		</div>
		<div class="collapse navbar-collapse" uib-collapse="$ctrl.isNavCollapsed">
			<ul class="nav navbar-nav">
				<li><a ui-sref="about">About</a></li>
				<li><a ui-sref="autism">Austim</a></li>
				<li><a ui-sref="services">Services</a></li>
				<li><a ui-sref="events">Events</a></li>
				<li><a ui-sref="help">Help</a></li>
				<li><a ui-sref="contacts">Contacts</a></li>
			</ul>
		</div>
	</nav>
</div>
</div>
</div>`,
        controller: [function () {
            var self = this;
			self.isNavCollapsed = true;
        }]
    }

    angular.module(module.HEADER).component('headerComponent', headerComponent);
});
