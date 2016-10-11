var myApp = angular.module('myApp', []);

myApp.controller('ListCtrl', ['$location', function ($location) {
	var _self = this;

	console.log("ListCtrl constructor");

	console.log("user loading start");

	_self.users = [];
	for (var i=0; i<1000; i++) {
		_self.users.push({name: "name", surname: "surname", showEditor: false});
	}

	console.log("user loading end");

	_self.editMode = function (user) {
		console.log("updateUser");
		user.showEditor = !user.showEditor;
	};

	
}]);
