var gameApp = angular.module('gameApp', []);
gameApp.controller('MainController', function MainController($scope, $http) {

	$scope.allInstruments = [
		{name: 'drums', sound: 'empty', img: 'drums.jpg'},
		{name: 'trumpet', sound: 'empty', img: 'trumpet.jpg'},
		{name: 'cello', sound: 'empty', img: 'cello.png'},
		{name: 'violin', sound: 'empty', img: 'violin.jpg'},
		{name: 'bass guitar', sound: 'empty', img: 'bassguitar.png', description:'De basgitaar is een snaarinstrument (doorgaans viersnarig) dat in vele vormen van moderne niet-klassieke muziek wordt gebruikt. De stemming is standaard ’E – ’A – D – G; zoals een contrabas en gelijk aan de laagste vier snaren van een gitaar, maar dan een octaaf lager. Meestal wordt een basgitaar uitgevoerd met frets, hoewel fretloze basgitaren ook bestaan.'},
		{name: 'electric guitar', sound: 'empty', img: 'electricGuitar.png'}
	]
	
	$scope.instrumentsCurrentRound = [];
	$scope.amountTried = 0;
	$scope.score = 0;
	$scope.roundCorrect = false;

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
	    $scope.correctInstrument = $scope.instrumentsCurrentRound[Math.floor(Math.random() * $scope.instrumentsCurrentRound.length)];
	}
	generateRound();

	$scope.checkAnswer = function()
	{
		if(this.instrument.name == $scope.correctInstrument.name)
		{
			if($scope.amountTried == 0 )
			{
				$scope.score += 3;
			}
			else if($scope.amountTried == 1)
			{
				$scope.score += 2;
			}
			else
			{
				$scope.score += 1;
			}
			$scope.roundCorrect = true;
		}
		else
		{
			$scope.amountTried += 1;
		}

	}
});
