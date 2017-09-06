var gameApp = angular.module('gameApp', []);
gameApp.controller('MainController', function MainController($scope, $http) {

	$scope.allInstruments = [
		{name: 'drums', sound: 'empty', img: 'empty'},
		{name: 'trumpet', sound: 'empty', img: 'empty'},
		{name: 'cello', sound: 'empty', img: 'empty'},
		{name: 'violin', sound: 'empty', img: 'empty'},
		{name: 'bass guitar', sound: 'empty', img: 'empty'},
		{name: 'guitar', sound: 'empty', img: 'empty'}
	]
	$scope.currentRound = [];
	
	function generateRound(){
	    var max = $scope.allInstruments.length;
	    var random = [];
	    for(var i = 0;i<4 ; i++){
	        var temp = Math.floor(Math.random()*max);
	        if(random.indexOf(temp) == -1){
	            random.push(temp);
	            $scope.currentRound.push($scope.allInstruments[temp])
	        }
	        else
	         i--;
	    }
	    console.log($scope.currentRound);
	}
	generateRound();
});
