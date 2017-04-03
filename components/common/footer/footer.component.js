define(["app", "angular"], function (module, angular) {

    var footerComponent = {
        bindings: {},
        template: `<div class="row footer">
        				<div class="col-md-12 footer">
							<div class="row">
								<div class="col-md-1">
									<div class="facebook-link">
										<a href="https://www.facebook.com/pages/ASHA-Hope/117386201624245" target="_blank"></a>
									</div>
								</div>

								<div class="col-md-4 col-md-offset-1">
									<div class="footer-link">
										<a href="" target="_blank">Copyright(c)Ashaforautism.com-2014</a>
									</div>
								</div>

								<div class="col-md-2">
									<div class="footer-link">
										<a href="" target="_blank">Privacy policy</a>
									</div>
								</div>

								<div class="col-md-2">
									<div class="footer-link">
										<a href="" target="_blank">Terms and conditions</a>
									</div>
								</div>
							</div>
        				</div>
				   </div>`,
        controller: [function () {
            var self = this;
        }]
    }

    angular.module(module.HEADER).component('footerComponent', footerComponent);
});
