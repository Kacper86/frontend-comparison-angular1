var myApp = angular.module('myApp', []);

myApp.controller('MessageCtrl', ['MessageService', function (messageService) {
	var _self = this;

	console.log("MessageCtrl constructor");

	_self.getMessageCounter = function () {
		console.log("MessageCtrl getMessageCounter");
		return messageService.getMessageCounter();
	};

	_self.increaseMessageCounter = function () {
		console.log("MessageCtrl increase Message Counter");
		messageService.increaseMessageCounter();
	}
}]);

myApp.service('MessageService', [function () {
	var _self = this;

	console.log("MessageService constructor");

	_self.messageCounter = 0;

	_self.getMessageCounter = function () {
		console.log("MessageService getMessageCounter");
		return _self.messageCounter;
	};

	_self.increaseMessageCounter = function () {
		_self.messageCounter++;
	}
}]);