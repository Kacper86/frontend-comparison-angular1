var myApp = angular.module('myApp', []);

myApp.controller('ListCtrl', ['$location', function ($location) {
	var _self = this;

	console.log("ListCtrl constructor");

	console.log("user loading start");

	_self.users = [];
	for (var i=0; i<1000; i++) {
		_self.users.push({name: "name", surname: "surname"});
	}

	console.log("user loading end");

	_self.updateUser = function (user) {
		console.log("updateUser");
		user.name = "ala ma kota";
	};

	
}]);
