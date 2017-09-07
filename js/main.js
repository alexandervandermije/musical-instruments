var gameApp = angular.module('gameApp', []);
gameApp.controller('MainController', function MainController($scope, $http) {

	$scope.allInstruments = [
		{name: 'drums', sound: 'empty', img: 'drums.jpg'},
		{name: 'trumpet', sound: 'empty', img: 'trumpet.jpg'},
		{name: 'cello', sound: 'empty', img: 'cello.png'},
		{name: 'violin', sound: 'empty', img: 'violin.jpg'},
		{name: 'bass guitar', sound: 'empty', img: 'bassguitar.png'},
		{name: 'electric guitar', sound: 'empty', img: 'electricGuitar.png'}
	]
	
	$scope.instrumentsCurrentRound = [];
	$scope.amountTried = 0;
	$scope.score = 0;

	function generateRound(){
	    var max = $scope.allInstruments.length;
	    var random = [];
	    for(var i = 0;i<4 ; i++){
	        var temp = Math.floor(Math.random()*max);
	        if(random.indexOf(temp) == -1){
	            random.push(temp);
	            $scope.instrumentsCurrentRound.push($scope.allInstruments[temp])
	        }
	        else
	         i--;
	    }
	    console.log($scope.instrumentsCurrentRound);
	    $scope.correctInstrument = $scope.instrumentsCurrentRound[Math.floor(Math.random() * $scope.instrumentsCurrentRound.length)];
	}
	generateRound();

	$scope.checkAnswer = function()
	{
		console.log(this.instrument.name);
		if(this.instrument.name == $scope.correctInstrument.name)
		{
			console.log('correct');
		}
		else
		{
			$scope.amountTried +=1 ;
			console.log($scope.amountTried);
		}

	}
});
