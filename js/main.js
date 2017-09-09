var gameApp = angular.module('gameApp', []);
gameApp.controller('MainController', function MainController($scope, $http) {

	$scope.allInstruments = [
		{name: 'drums', sound: 'drum.mp3', img: 'drums.jpg', description:'Een drumstel (ook: drums) is een verzameling slagwerkinstrumenten die door een enkele persoon, een drummer, bespeeld wordt.'},
		{name: 'trompet', sound: 'trumpet.mp3', img: 'trumpet.jpg', description:'De trompet is een blaasinstrument van de familie der koperblazers, waarbij het geluid ontstaat doordat de lippen die tegen het mondstuk geplaatst worden, met de adem in trilling worden gebracht. De trompet klinkt vrij hoog en heeft een heldere doordringende toon.'},
		{name: 'cello', sound: 'cello.mp3', img: 'cello.png', description:'De cello (kort voor violoncello) behoort tot de groep van de strijkinstrumenten. De cello heeft een kenmerkende klank en een bereik van vier, gemiddeld vijf, of soms zelfs zes octaven (ligt aan de grootte van de cello en de lengte van de toets).'},
		{name: 'viool', sound: 'violin.mp3', img: 'violin.jpg', description:'De viool is een snaarinstrument met vier snaren. Het is het kleinste lid van de vioolfamilie, en heeft het hoogste bereik. De klank wordt voortgebracht door de snaren in trilling te brengen met een strijkstok (arco), of door te tokkelen met de vingers (pizzicato). De houten klankkast dient om het geluid van de trillende snaren te versterken. De viool wordt doorgaans bespeeld door het instrument tussen kin en schouder te klemmen en met de vingers van de linkerhand de snaren af te drukken tegen de ebbenhouten toets om zodoende de snaar te verkorten (en dus hoger te doen klinken).'},
		//{name: 'bass gitaar', sound: 'empty', img: 'bassguitar.png', description:'De basgitaar is een snaarinstrument (doorgaans viersnarig) dat in vele vormen van moderne niet-klassieke muziek wordt gebruikt. De stemming is standaard ’E – ’A – D – G; zoals een contrabas en gelijk aan de laagste vier snaren van een gitaar, maar dan een octaaf lager. Meestal wordt een basgitaar uitgevoerd met frets, hoewel fretloze basgitaren ook bestaan.'},
		{name: 'elektrische gitaar', sound: 'elektrischeGitaar.mp3', img: 'electricGuitar.png', description:"Bij elektrische gitaren wordt er een elektrisch signaal opgewekt door middel van het Hall-effect doordat de (metalen) snaar in een magnetisch veld trilt en in de elementen een elektrisch signaal genereert. De amplitude van dit signaal wordt dan door een versterker vergroot, waarbij diverse filters en effecten het geluid kunnen beïnvloeden. Er bestaan elektrische gitaren met klankkast, maar het merendeel heeft een solid body. Deze gitaar wordt veel gebruikt in de blues en de rock-'n-roll, en daarnaast in genres als metal, ska, punk, rock en hardrock. Rickenbacker nam de eerste elektrische gitaar in productie, deze was ontworpen door George Beauchamp."},
		{name: 'accordeon', sound:'accordeon.mp3', img:'accordeon.jpg', description:'Een accordeon is een muziekinstrument dat vanwege de manier van geluidvoortbrenging tot de aerofonen wordt gerekend. Op basis van de bespeling is het een toetsinstrument. Het instrument wordt accordeon genoemd vanwege de constructie van het mechaniek van de linkerhand. Door een matrix van stangen en knoppen wordt een drietal tonen tegelijk geproduceerd, een akkoord. De bespeler van het instrument wordt accordeonist genoemd.'},
		{name: 'bongo', sound:'bongo.mp3', img:'bongo.png', description:"Bongo's zijn kleine handtrommels die meestal per twee aan elkaar hangen en samen bespeeld worden. Bij drumbands en malletbands worden de bongo's opgehangen aan de kleine trom en worden bespeeld met mallets."},
		{name: 'castagnetten', sound:'castagnetten.mp3', img:'casta.png', description:'Castagnetten zijn een slagwerkinstrument dat vooral gebruikt wordt in Moorse muziek, zigeunermuziek, Spaanse muziek en Latijns-Amerikaanse muziek. Het instrument bestaat uit een paar holle hardhouten schelpen die aan één kant verbonden zijn met een koordje. Ze worden in de hand gehouden en produceren een klikgeluid of een ratelend geluid bij snel opeenvolgende kliks.'},
		{name: 'cello', sound:'cello.mp3', img:'cello.png', description:'De cello (kort voor violoncello) behoort tot de groep van de strijkinstrumenten. De cello heeft een kenmerkende klank en een bereik van vier, gemiddeld vijf, of soms zelfs zes octaven (ligt aan de grootte van de cello en de lengte van de toets).'},
		{name: 'cymbaal', sound:'cymbal.mp3', img:'cymbaal.jpg', description:'Een cymbal is een algemeen percussie instrument. Cymbalen worden vaak gebruikt in paren, dunne, normaal ronde platen van verschillende legeringen. Cymbalen worden gebruikt in veel ensembles, variërend van het orkest, percussie ensembles, jazz bands, heavy metal bands en marscheren groepen. Drumkits bevatten meestal tenminste een crash, rit of crash / rit, en een paar hoed-cimbalen. Een cymbalspeler is bekend als een cymbalist.'},
		{name: 'didgeridoo', sound:'digiridoo.mp3', img:'didgeridoo.jpg', description:'De didgeridoo, uitgesproken als didzjeriedoe, is een blaasinstrument, vooral bekend uit Australië waar de Aboriginals in Noord-Australië (Noordelijk Territorium) het instrument reeds duizenden jaren bespelen.'},
		{name: 'doedelzak', sound:'', img:'doedelzakken.png', description:'De doedelzak is een bijzonder oude vorm van blaasinstrument. De doedelzak is een rietinstrument waarbij het riet indirect bespeeld wordt via een luchtkamer en dus niet met de lippen of tong aangeraakt wordt. Doedelzakken zijn eigenlijk eerder een familie van muziekinstrumenten dan een enkel instrument. Zowel enkele als dubbele rieten worden toegepast.'},
		//{name: 'fagot', sound:'', img:'', description:"De fagot is een houten blaasinstrument met dubbelriet in tenor- en basligging, dat wordt ingedeeld bij de houtblazers. Het instrument bestaat uit een lange (houten) buis met een licht conische boring. Omwille van de hanteerbaarheid is de buis 'dubbelgevouwen', een bouwwijze waaraan de fagot zijn naam dankt: het Italiaanse 'fagotto' betekent (takken)bundel."},
		{name: 'dwarsfluit', sound:'fluit.mp3', img:'flute.jpg', description:'De dwarsfluit - in de klassieke muziek meestal kortweg fluit genoemd - wordt, zoals de naam aangeeft, dwars op de lippen geblazen; de luchtstroom uit de mond staat haaks op de boring van het instrument. De kleinere en hoger gestemde uitvoering wordt piccolo genoemd, de grotere uitvoeringen altfluit en basfluit. De moderne dwarsfluit, tegenwoordig meestal van metaal, is door Theobald Böhm ontwikkeld uit de traverso (barokfluit) die meestal van hout was.'},
		{name: 'acoustische gitaar', sound:'acousticGuitar.mp3', img:'acousticGuitar.png', description:'Een gitaar is een snaarinstrument dat wordt bespeeld met de vingers of met een plectrum. Het woord gitaar stamt af van het Perzische "taar" dat "snaar" betekent.'},
		{name: 'gong', sound:'gong.mp3', img:'gong.png', description:'Een gong is een ronde metallofoon van Oost-Aziatische herkomst die een specifieke toonhoogte kan hebben. De bouw kan variëren van die van een ronde, gekromde schotel (al dan niet met een bult erop, zoals bij de Chinese gong), tot die van een rechthoekige metalen plaat. Hij wordt met een vilten, metalen of houten klopper bespeeld.'},
		{name: 'harp', sound:'harp.mp3', img:'harp.png', description:'De harp is een snaarinstrument, waarbij de snaren meestal met de vingers in trilling worden gebracht. De harp is opgebouwd uit een langwerpige klankkast waarop een groot aantal snaren gespannen zijn, die van elkaar verschillen in lengte en dikte. Elke snaar brengt slechts één toon voort: hoe langer (en dikker) de snaar, hoe lager de toon.'},
		{name: 'hoorn', sound:'horn.mp3', img:'horn.png', description:'De hoorn is een muziekinstrument dat sinds lange tijd belangrijke functies heeft vervuld. Vroeger werd de hoorn bij de jacht gebruikt. Hoorns werden ook gebruikt om signalen door te geven, zoals de posthoorn, signaalhoorn en bugel. Tegenwoordig is de hoorn vooral bekend als blaasinstrument in ensembles, orkesten of als solistisch muziekinstrument.'},
		//{name: 'klarinet', sound:'klarinet.mp3', img:'', description:'De klarinet is een blaasinstrument behorend tot de enkelrietinstrumenten. In het harmonieorkest en symfonieorkest wordt de klarinet gerekend tot de houtblazers. De naam komt van clarinetto, een verkleinwoord van het Italiaanse clarino, een soort trompet.'},
		//{name: 'klavecimbel', sound:'klavecimbel.mp3',img:'', description:'Het klavecimbel is een snaarinstrument dat met toetsen bespeeld wordt. Vóór het ontstaan van de piano was het met het pijporgel het belangrijkste toetsinstrument. In tegenstelling tot de piano (waarbij de snaren aangeslagen worden) worden de snaren van een klavecimbel getokkeld. Het geluid van een klavecimbel lijkt wat op dat van een luit, maar dan luider. Hij of zij die een klavecimbel bespeelt is een klavecinist of een klavecimbelbespeler.'},
		{name: 'marimba', sound:'marimba.mp3', img:'marimba.jpg', description:"Een marimba is een aan de xylofoon verwant muziekinstrument uit de familie der idiofonen. Marimba's hebben net als de xylofoon houten staven/toetsen. Marimba's worden zowel in volksmuziek als in klassieke muziek gebruikt. De marimba kan beschouwd worden als de alt- of basversie van een xylofoon. Een marimba heeft een veel warmere en vollere klank dan een xylofoon."},
		{name: 'mondharmonica', sound:'mondharmonica.mp3', img:'mondharmonica.png', description:'De mondharmonica is een blaasinstrument en een lamellofoon dat qua toonvorming sterk verwant is aan de trekzak. Het werd door Christian Friedrich Buschmann in 1821 ontworpen. In plaats van met een balg wordt lucht met de mond door de openingen geblazen of gezogen. De luchtstroom brengt een doorslaande tong in trilling die een toon ten gehore brengt. De mondharmonica is doorgaans wisseltonig; blazen en zuigen levert een verschillende toon.'},
		{name: 'orgel', sound:'orgel.mp3', img:'orgel.jpg', description:'Een orgel is een muziekinstrument dat bestaat uit meerdere afzonderlijke pijpen waar lucht doorheen stroomt op een labium of op een tong. Het instrument wordt daarom gerekend tot de aerofonen. Een bespeler van een orgel noemt men een organist.'},
		{name: 'panfluit', sound:'panfluit.mp3', img:'panFlute.jpg', description:'De panfluit is een fluit die is opgebouwd uit een aantal aan de onderzijde gesloten buizen van verschillende lengte. Als materiaal wordt voor de Zuid-Amerikaanse panfluit veelal bamboe gebruikt. Daarnaast zijn er ook panfluiten gemaakt van hout, glas of metaal. De naam panfluit is afkomstig van de Griekse god Pan.'},
		{name: 'pauk', sound:'pauk.mp3', img:'timpani.png', description:'Een pauk is een keteltrom met een gedefinieerde toonhoogte. Op een koperen of kunststof ketel (doorsnede 50 tot 80 cm) is een vel gespannen. Vroeger gebruikte men kalfshuid, maar tegenwoordig steeds vaker synthetisch vervaardigde vellen. Door met een mallet op het vel te slaan klinkt een bepaalde toon. De toonhoogte is afhankelijk van de spanning van het vel en de plaats waarop het vel geraakt wordt. De grootte van de eronder liggende resonantieruimte bepaalt in welk toonbereik de pauk gebruikt kan worden.'},
		{name: 'piano', sound:'piano.mp3', img:'piano.png', description:'De piano is een slag-, toets- en snaarinstrument uit de citerfamilie dat bespeeld wordt met een enkel klavier en 2 of 3 pedalen. De piano heeft grote witte toetsen en kleine zwarte toetsen. Bij de voorlopers van de piano (klavecimbel) was dit omgekeerd. De moderne piano is geëvolueerd uit de fortepiano, het instrument waarop bijvoorbeeld Mozart al zijn pianomuziek heeft gecomponeerd.'},
		{name: 'saxofoon', sound:'saxofoon.mp3', img:'saxophone.png', description:'Een saxofoon is een blaasinstrument met een conische, meestal S-vormige buis, die voorzien is van kleppen. De saxofoon wordt niet tot de koperblazers gerekend, maar zoals alle riet-blaasinstrumenten tot de houtblazers. Saxofoons hebben een conische boring – ze worden van het mondstuk naar het bekeruiteinde toe breder. Het riet begint te trillen bij het blazen, zo ontstaat het geluid dat daarna door het andere deel van het instrument gaat. De drie grote delen van de saxofoon; het mondstuk, de hals, het klankgat.'},
		{name: 'synthesizer', sound:'synthesizer.mp3', img:'synthesizer.jpg', description:'Een synthesizer is een elektronisch muziekinstrument dat klanken en geluiden kunstmatig (meestal elektronisch) opwekt. Met een synthesizer is het mogelijk het op te wekken geluid vergaand te beïnvloeden, zodat nieuwe, nog niet bestaande klanken gemaakt kunnen worden. Ook kunnen sommige synthesizers de klanken van reeds bestaande (akoestische) instrumenten, bijna perfect nabootsen (bijvoorbeeld piano of orgel).'},
		{name: 'tamboerijn', sound:'tambourine.mp3', img:'tambourine.jpg', description:'Een tamboerijn is een lijsttrommel, die bestaat uit een hoepel waaraan belletjes bevestigd zijn en die is bespannen met een trommelvel. Zonder belletjes is het geen tamboerijn maar een handtrom. Zijn de belletjes er wel, maar is er geen vel aangespannen, dan is het een beatring, ofwel een schellenkrans. Het instrument wordt met de hand aangeslagen of bewogen. In veel Zuid-Europese volksmuziek (Spanje, Portugal, Italië) is de tamboerijn regelmatig te zien en te horen.'},
		{name: 'triangel', sound:'triangel.mp3', img:'triangel.png', description:'De triangel is een metalen slaginstrument dat behoort tot de klasse van de idiofonen. Het instrument bestaat uit een driehoekig gebogen metalen staaf, en wordt opgehangen aan de bovenkant en aangeslagen met een kleiner metalen staafje. Dat gebeurt bij voorkeur op de zijde tegenover de opening, voor de mooiste klank. De triangel brengt slechts drie klokjesachtige, maar doordringende tonen voort en wordt onder meer in een orkest gebruikt. Roffels worden in een van de dichte hoeken geproduceerd door het staafje snel heen en weer te bewegen. Een triangel komt voor in verschillende formaten: kleinere klinken hoger dan grotere, hoewel de exacte toonhoogte van een triangel (anders dan die van een pauk) in de muziek geen rol speelt. De triangel bereikte Europa in de zeventiende eeuw vanuit Turkije, en is sinds de negentiende eeuw een van de meest gebruikte slagwerkinstrumenten in het symfonieorkest.'},
		{name: 'trombone', sound:'trombone.mp3', img:'trombone.jpg', description:'De trombone (in de volksmond ook wel foutief schuiftrombones genoemd) is een blaasinstrument dat tot het scherpe koper wordt gerekend. De naam stamt van het Italiaanse tromba met het suffix one en betekent dus "grote trompet". In de volksmond wordt dit instrument ook schuiftrompet genoemd, wat eigenlijk de naam van een ander koperinstrument is. De trombone is familie van de trompet en in de meest voorkomende vorm (de tenortrombone) is zij tweemaal zo lang als de B♭-trompet. Door het uitschuiven kan de bespeler de effectieve buislengte verkorten of verlengen, waarmee ook de toonhoogte verandert.'},
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
