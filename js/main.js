var gameApp = angular.module('gameApp', []);
gameApp.controller('MainController', function MainController($scope, $http) {

	$scope.allInstruments = [
		{name: 'drums', sound: 'empty', img: 'empty'},
		{name: 'trumpet', sound: 'empty', img: 'empty'},
		{name: 'cello', sound: 'empty', img: 'empty'},
		{name: 'violin', sound: 'empty', img: 'empty'},
		{name: 'bass guitar', sound: 'empty', img: 'empty'}
	]
	console.log($scope.allInstruments);
});
