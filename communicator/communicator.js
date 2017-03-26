define(["app", "angular"], function (module, angular) {
	var communicator = function ($http, $q) {
		var COMMUNICATOR = {};

		COMMUNICATOR.get = function (source) {
			var d = $q.defer(), url = "data/" + source + ".json";
			console.log(url);
			$http.get(url).then(function (res) {
				d.resolve(res);
			} , function (err) {
				d.reject(err);
			});

			return d.promise;
		};

		COMMUNICATOR.sendMessage = function(msgUrl){
			var d = $q.defer(), url = msgUrl;
			console.log(url);
			$http.get(url).then(function (res) {
				d.resolve(res);
			} , function (err) {
				d.reject(err);
			});
		};

		// need to implement when require
		COMMUNICATOR.post = function (path) {

		};

		return COMMUNICATOR;
	};

	angular.module(module.COMMUNICATOR).factory("communicator", ["$http", "$q", communicator]);
});