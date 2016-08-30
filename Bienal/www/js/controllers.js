angular.module('app.controllers', [])        

  //codigo feo por que nos pagaron poco por mucho xD
.controller('inicioCtrl', function($scope,$state,$ionicPopup) {
	$scope.share = function(){
		var options = {message: '#SoyBienal 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir con', 
		}

		var onSuccess = function(result) {
			if(result.completed == true)
				window.plugins.toast.showLongBottom("Compartido con éxito! en " + result.app);
			else
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
		}

		var onError = function(msg) {
		console.log("Sharing failed with message: " + msg);
		}

		var confirmPopup = $ionicPopup.confirm({
			title: 'Compartir',
			template: 'Compartir con amigos?'
		})
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
			}
			else{
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
			}
		})
	}

	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: '#SoyBienal 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir con'
		}

		var onSuccess = function(result) {
			if(result.completed == true)
				window.plugins.toast.showLongBottom("Compartido con éxito! en " + result.app);
			else
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
		}

		var onError = function(msg) {
		console.log("Sharing failed with message: " + msg);
		}
		switch(index)
		{
		case 0:
			var title = 'Virtmia';
			var loc = 'Rectorado. Explanada';
			var notes = '';
			var startDate = new Date("September 2, 2016");
			var endDate = new Date("");
			var calendarName = "MyCal";
			var e = '';
			console.log(index);
			startDate.setMinutes(0);
			endDate.setMinutes(2400);
			startDate.setSeconds(0);
			break
		case 1:
			var title = 'Cielo Razzo';
			var loc = 'FCJS. Patio de la Reforma';
			var notes = '';
			var startDate = new Date("September 2, 2016");
			var endDate = new Date("");
			var calendarName = "MyCal";
			var e = '';
			console.log(index);
			startDate.setMinutes(0);
			endDate.setMinutes(2400);
			startDate.setSeconds(0);
			break
		case 2:
			var title = 'Parteplaneta';
			var loc = 'FCJS. Patio de la Reforma';
			var notes = '';
			var startDate = new Date("September 10, 2016");
			var endDate = new Date("");
			var calendarName = "MyCal";
			var e = '';
			console.log(index);
			startDate.setMinutes(0);
			endDate.setMinutes(2400);
			startDate.setSeconds(0);
			break
		default:
			console.log("Whaaaaaaat");
		}
		try{
			window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);
			window.plugins.toast.showLongBottom("Evento agregado al calendario con éxito!");
			var confirmPopup = $ionicPopup.confirm({
			title: 'Compartir',
			template: options.chooserTitle+'?'
		})
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
			}
			else{
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
			}
		})
		}
		finally
		{
		}
	}

	$scope.showBI = function(){
		$state.go('menu.bienal');
	}

	$scope.showVI = function(){
		$state.go('menu.virtmia');
	}

	$scope.showCR = function(){
		$state.go('menu.cielorazzo');
	}
	$scope.showPP = function(){
		$state.go('menu.parteplaneta');
	}
	$scope.vivo = function(){
		$state.go('menu.youtube');
	}
	$scope.showVT = function(){
		$state.go('menu.votos');
	}
})


.controller('transmisionCtrl', function($scope,$ionicModal) {
	
})

.controller('musicaCtrl', function($scope, $ionicModal, $ionicPopup) {

	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: '#SoyBienal 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir con'
		}

		var onSuccess = function(result) {
			if(result.completed == true)
				window.plugins.toast.showLongBottom("Compartido con éxito! en " + result.app);
			else
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
		}

		var onError = function(msg) {
		console.log("Sharing failed with message: " + msg);
		}
		switch(index)
		{
			case 0:
				var title = 'Musica';
				var loc = 'Rectorado. FCJS';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 3, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Musica';
				var loc = 'Rectorado. FCJS';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 4, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Musica';
				var loc = 'Rectorado. FCJS';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 5, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Musica';
				var loc = 'Rectorado. FCJS';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 6, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				var title = 'Musica';
				var loc = 'Rectorado. FCJS';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 7, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 5:
				var title = 'Musica';
				var loc = 'Rectorado. FCJS';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 8, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Musica';
				var loc = 'Rectorado. FCJS';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 9, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break

			default:
				console.log("Whaaaaaaat");
		}
		try{
			window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);
			window.plugins.toast.showLongBottom("Evento agregado al calendario con éxito!");
			var confirmPopup = $ionicPopup.confirm({
			title: 'Compartir',
			template: options.chooserTitle+'?'
		})
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
			}
			else{
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
			}
		})
		}
		finally
		{
		}
	}
})
   
.controller('audioVisualesCtrl', function($scope, $ionicModal) {

	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: '#SoyBienal 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir con'
		}

		var onSuccess = function(result) {
			if(result.completed == true)
				window.plugins.toast.showLongBottom("Compartido con éxito! en " + result.app);
			else
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
		}

		var onError = function(msg) {
		console.log("Sharing failed with message: " + msg);
		}
		switch(index)
		{
			case 0:
				var title = 'Audiovisuales';
				var loc = 'Foro Cultural. Sala Saer';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 3, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Audiovisuales';
				var loc = 'Foro Cultural. Sala Saer';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 4, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Audiovisuales';
				var loc = 'Foro Cultural. Sala Saer';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 5, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Audiovisuales';
				var loc = 'Rectorado. Paraninfo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 6, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				var title = 'Audiovisuales';
				var loc = 'Foro. Rectorado';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 7, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 5:
				var title = 'Audiovisuales';
				var loc = 'Rectorado. Paraninfo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 8, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Audiovisuales';
				var loc = 'Rectorado. Paraninfo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 9, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			default:
				console.log("Whaaaaaaat");
		}
		try{
			window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);
			window.plugins.toast.showLongBottom("Evento agregado al calendario con éxito!");
			var confirmPopup = $ionicPopup.confirm({
			title: 'Compartir',
			template: options.chooserTitle+'?'
		})
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
			}
			else{

			}
		})
		}
		finally
		{
		}
	}
})

   
.controller('letrasCtrl', function($scope, $ionicModal) {

	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: '#SoyBienal 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir con'
		}

		var onSuccess = function(result) {
			if(result.completed == true)
				window.plugins.toast.showLongBottom("Compartido con éxito! en " + result.app);
			else
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
		}

		var onError = function(msg) {
		console.log("Sharing failed with message: " + msg);
		}
		switch(index)
		{
			case 0:
				var title = 'Letras';
				var loc = 'Foro Cultural. Entrepiso';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 3, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Letras';
				var loc = 'Foro Cultural. Entrepiso';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 4, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Letras';
				var loc = 'Foro Cultural. Entrepiso';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 5, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Letras';
				var loc = 'Foro Cultural. Entrepiso';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 6, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				var title = 'Letras';
				var loc = 'Foro Cultural. Entrepiso';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 7, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 5:
				var title = 'Letras';
				var loc = 'Foro Cultural. Entrepiso';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 8, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Letras';
				var loc = 'Foro Cultural. Entrepiso';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 9, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			default:
				console.log("Whaaaaaaat");
		}
		try{
			window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);
			window.plugins.toast.showLongBottom("Evento agregado al calendario con éxito!");
			var confirmPopup = $ionicPopup.confirm({
			title: 'Compartir',
			template: options.chooserTitle+'?'
		})
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
			}
			else{

			}
		})
		}
		finally
		{
		}
	}
})


.controller('visualesCtrl', function($scope, $ionicModal) {

	$scope.share = function(){
		var options = {message: '#SoyBienal 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir con', 
		}

		var onSuccess = function(result) {
			if(result.completed == true)
				window.plugins.toast.showLongBottom("Compartido con éxito! en " + result.app);
			else
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
		}

		var onError = function(msg) {
		console.log("Sharing failed with message: " + msg);
		}

		var confirmPopup = $ionicPopup.confirm({
			title: 'Compartir',
			template: 'Compartir con amigos?'
		})
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
			}
			else{
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
			}
		})
	}
})

   
.controller('escenicasCtrl', function($scope, $ionicModal, $ionicPopup) {

	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: '#SoyBienal 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir con'
		}

		var onSuccess = function(result) {
			if(result.completed == true)
				window.plugins.toast.showLongBottom("Compartido con éxito! en " + result.app);
			else
				window.plugins.toast.showLongBottom("Mala onda, cancelaste :(");
		}

		var onError = function(msg) {
		console.log("Sharing failed with message: " + msg);
		}
		switch(index)
		{
			case 0:
				var title = 'Escenicas';
				var loc = 'Foro Cultural. Sala Maggi';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 3, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Escenicas';
				var loc = 'Foro Cultural. Sala Maggi';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 4, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Escenicas';
				var loc = 'Foro Cultural. Sala Maggi';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 5, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Escenicas';
				var loc = 'Foro Cultural. Sala Maggi';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 6, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				break
			case 5:
				var title = 'Escenicas';
				var loc = 'Foro Cultural. Sala Maggi';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 8, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Escenicas';
				var loc = 'Foro Cultural. Sala Maggi';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("September 9, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			default:
				console.log("Whaaaaaaat");
		}
		try{
			window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);
			window.plugins.toast.showLongBottom("Evento agregado al calendario con éxito!");
			var confirmPopup = $ionicPopup.confirm({
			title: 'Compartir',
			template: options.chooserTitle+'?'
		})
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
			}
			else{

			}
		})
		}
		finally
		{
		}
	}
})

.controller('votoCtrl', function($scope, $ionicModal, $ionicPopup, $state) {

	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
	var string = device.uuid;
	}

	$scope.testClick = function () {
	var NombreP = document.myform.Nombre.value;
	var ApellidoP = document.myform.Apellido.value;
	var DniP = document.myform.DNI.value;
	var EmailP = document.myform.Email.value;
	if(NombreP !="")
	{       
		window.localStorage.setItem("NombreP", NombreP);
		window.localStorage.setItem("ApellidoP", ApellidoP);
		window.localStorage.setItem("DniP", DniP);
		window.localStorage.setItem("EmailP", EmailP);
		window.localStorage.setItem("uuid", device.uuid);
		if(!window.localStorage.getItem("votado"))
		{
			window.plugins.toast.showLongBottom("Bienvenido para votar!");
			var votado = true;
			window.localStorage.setItem("votado", votado);
			$scope.cotejar_datos_de_persona = function (nombre, apellido, email, dni, uuid) {
				return personasService.cotejar_datos_de_persona(window.localStorage.getItem(NombreP), 
				window.localStorage.getItem(ApellidoP), window.localStorage.getItem(EmailP), 
				window.localStorage.getItem(DniP), window.localStorage.getItem(uuid));
			};
			$state.go('menu.vMusica');
			}else{
			window.plugins.toast.showLongBottom("Usted ya ha votado ");
			}
		}else {
			if( device.uuid == null)
			{
				$ionicPopup.alert({
				title: 'Whaaaaaaat??',
				template: 'mepa que no deberias estar aca pillin'
				});
			}
			$ionicPopup.alert({
				title: 'Por favor..',
				template: 'Por favor complete todos los campos'
			});
		}
	}
})

.controller('vMusicaCtrl', function($scope, $ionicModal, $ionicPopup, $state) {

	$scope.serverSideList = [
		{ text: "Categoria A", value: null, value1: null},
		{ text: "Efraín Caraballo", value: "id" },
		{ text: "Habla La Muda", value: "id" },
		{ text: "Meraki", value: "id" },
		{ text: "Rap Libre", value: "id" },
		{ text: "Sin devolución", value: "id" },
		{ text: "Sinner", value: "id" },
		{ text: "Categoria B", value: null },
		{ text: "Ajo Pachuco", value: "id" },
		{ text: "Alejandra Latosinsky", value: "id" },
		{ text: "ArteFacto", value: "id" },
		{ text: "Balu", value: "id" },
		{ text: "Bordon Claro", value: "id" },
		{ text: "Candela en majuma", value: "id" },
		{ text: "Clemenza", value: "id"},
		{ text: "Copanahue", value: "id"},
		{ text: "Cosmudus", value: "id"},
		{ text: "Dante Leonel", value: "id"},
		{ text: "Duo Cecchini-Somaglia", value: "id"},
		{ text: "Duo Sachayoj", value: "id"},
		{ text: "Edu Figueroa", value: "id"},
		{ text: "Emi Billud", value: "id"},
		{ text: "Emilia Cersoo", value: "id"},
		{ text: "Ensamble Sinfónico del Litoral", value: "id"},
		{ text: "Equilátera", value: "id"},
		{ text: "Flores de tipa", value: "id"},
		{ text: "Furor Sanandi", value: "id"},
		{ text: "GPS Trío", value: "id"},
		{ text: "Guatusai", value: "id"},
		{ text: "Gustavo De Marco", value: "id"},
		{ text: "Juane Voutat", value: "id"},
		{ text: "La conexión", value: "id"},
		{ text: "La vituela", value: "id"}, 
		{ text: "Las Damajuanas", value: "id"},
		{ text: "Las garras de betún", value: "id"},
		{ text: "Liebre", value: "id"},
		{ text: "Los cuervos", value: "id"},
		{ text: "Mastodonte", value: "id"},
		{ text: "Mayday", value: "id"},
		{ text: "Mi ambulancia negra", value: "id"},
		{ text: "Mu.Lit.A (Músicos del Litoral Argentino)", value: "id"},
		{ text: "Nada Más y Nada Menos", value: "id"},
		{ text: "Nativos Mutantes", value: "id"},
		{ text: "Naub", value: "id"},
		{ text: "Non Bis", value: "id"},
		{ text: "Notargiano Tavella Parrilla Trío", value: "id"},
		{ text: "Órco", value: "id"},
		{ text: "Parzival", value: "id"},
		{ text: "QunQay", value: "id"},
		{ text: "Río loco", value: "id"},
		{ text: "Santa fe Jazz Ensamble Junior", value: "id"},
		{ text: "Santa Karma", value: "id"},
		{ text: "Sine Die", value: "id"},
		{ text: "Skamas", value: "id"},
		{ text: "Subliminal", value: "id"},
		{ text: "Tabula Rasa", value: "id"},
		{ text: "Tembleque", value: "id"},
		{ text: "The experience", value: "id"},
		{ text: "Trío Tres Hileras", value: "id"}, 
		{ text: "Último trago", value: "id"},
		{ text: "Vaso Exquisito", value: "id"},
		{ text: "Vaya Paradoja!", value: "id"},
		{ text: "Zen Sessions", value: "id"}
	];

	$scope.serverSideChange = function(item) {
		if(item.value!=null)
		{
			var confirmPopup = $ionicPopup.confirm({
					title: 'Confirmar Ingreso',
					template: 'Esta seguro de votar al grupo '+item.text+'?'
				});
					confirmPopup.then(function(res) {
					if(res) {
						window.plugins.toast.showLongBottom("Gracias por su voto!");
						window.localStorage.setItem("voto_musica", item.value);
						$state.go('menu.vAV');
					}else{
						window.plugins.toast.showLongBottom("Voto Cancelado");
					} 
				});
		}
	}
})

.controller('vAVCtrl', function($scope, $ionicModal, $ionicPopup, $state) {
	$scope.serverSideList = [
		{ text: "Categoria A", value: null },
		{ text: "Sustancia", value: "id", value1: "Grupo VEF" },
		{ text: "Irkalia: La vida después de la muerte", value: "id", value1: "Grupo Irkalia" },
		{ text: "La Reina Roja", value: "id", value1: "Grupo Puente Carretero" },
		{ text: "Sueños", value: "id", value1: "Pierina Fiorentini" },
		{ text: "Siedemnascie", value: "id", value1: "Violeta Lucía Vignatti" },
		{ text: "Categoria B", value: null, value2: null },
		{ text: "Capitanelli y la nueva generación", value: "id", value1: "Grupo Tertium Quid" },
		{ text: "Punto medio", value: "id", value1: "Grupo BVC Santa Fe" },
		{ text: "Paranoicus", value: "id", value1: "Luciana Figueroa" },
		{ text: "Donde no hay nada", value: "id", value1: "Milton Secchi" },
		{ text: "Refl exiones I", value: "id", value1: "Federico Roldan Vukonich" },
		{ text: "L.", value: "id", value1: "Adrián Regnier" },
		{ text: "Waorani", value: "id", value1: "Grupo km sur" },
		{ text: "Video Juego Bogüis de Nola", value: "id", value1: "Grupo Bogüitas" },
		{ text: "La Cuarta Pared", value: "id", value1: "Lautaro Schjurjin" },
		{ text: "Inside a Wolf", value: "id", value1: "Grupo Perez Campos, Pergolesi, Torti" },
		{ text: "Italia", value: "id", value1: "Grupo Oblivio" },
		{ text: "Parar El Tiempo", value: "id", value1: "Grupo Abre" },
		{ text: "En El Taller", value: "id", value1: "Grupo Cristian Matt Hungo Deicas" },
		{ text: "Tonada de luna llena ", value: "id", value1: "Emilia Vergara" }
	];

	$scope.serverSideChange = function(item) {
		if(item.value!=null)
		{
			var confirmPopup = $ionicPopup.confirm({
			title: 'Confirmar Ingreso',
			template: 'Esta seguro de votar la obra '+item.text+' de '+item.value1+'?'
			});
			confirmPopup.then(function(res) {
				if(res) {
					window.plugins.toast.showLongBottom("Gracias por su voto!");
					window.localStorage.setItem("voto_audiovisuales", item.value);
					$state.go('menu.vLetras');
				}else{
					window.plugins.toast.showLongBottom("Voto Cancelado");
				} 
			});
		}
	}
})

.controller('vLetrasCtrl', function($scope, $ionicModal, $ionicPopup, $state) {
	$scope.serverSideList = [
		{ text: "Categoria A", value: null },
		{ text: "En la eterna oscuridad", value: "id", value1: "Santiago  Alcántara"  },
		{ text: "A contrareloj", value: "id", value1: "Diego  Bonino"  },
		{ text: "Máquina (in)diferencial", value: "id", value1: "Lautaro  Cosentino"  },
		{ text: "No te voy a exigir día", value: "id", value1: "Agustina Belén  Decoud"  },
		{ text: "Justicia divina", value: "id", value1: "María de los Milagros  Freyre"  },
		{ text: "Más allá de la oscuridad", value: "id", value1: "Agustina  Gorosito"  },
		{ text: "Somos Únicos", value: "id", value1: "María Belén  Kakisu"  },
		{ text: "Demonios", value: "id", value1: "Victoria  Lordi"  },
		{ text: "Mis pensamientos", value: "id", value1: "Tomás  Musetti"  },
		{ text: "Pensar", value: "id", value1: "Guillermina  Puertas"  },
		{ text: "Aspirinas", value: "id", value1: "Joaquín  Urrutia"  },
		{ text: "Categoia B", value: null },
		{ text: "Escapes", value: "id", value1: "Ariel  Aguirre"  },
		{ text: "Nuevas tecnologías", value: "id", value1: "Germán  Bartizzaghi"  },
		{ text: "Señorita", value: "id", value1: "Milena  Beltrame"  },
		{ text: "La casa de la mamá de mi mamá", value: "id", value1: "Jeremías  Boer"  },
		{ text: "Filtraciones", value: "id", value1: "Albano  Borotto"  },
		{ text: "Suplente", value: "id", value1: "Emiliano  Bustos"  },
		{ text: "Cotidiano", value: "id", value1: "Pilar  Cabré"  },
		{ text: "Vagancias", value: "id", value1: "Rosario  Caminos"  },
		{ text: "7 noches", value: "id", value1: "Leonel  Collazo"  },
		{ text: "Rumbo", value: "id", value1: "Facundo  Coronel"  },
		{ text: "Baquelita", value: "id", value1: "Larisa  Cumin"  },
		{ text: "Lo fantástico", value: "id", value1: "Elián  del Mestre"  },
		{ text: "Renombrar", value: "id", value1: "María Lucía  Fernández"  },
		{ text: "De Otro", value: "id", value1: "María del Carmen  Fuentes"  },
		{ text: "Des-empastillado", value: "id", value1: "Jorgelina Mercedes  Giliberti"  },
		{ text: "Clavel", value: "id", value1: "Sofía  Giombini"  },
		{ text: "De nosotros (tríptico)", value: "id", value1: "Priscila Daiana  Hernández"  },
		{ text: "Cumbre", value: "id", value1: "Martín Gabriel  Imvinkelried"  },
		{ text: "El centro del mundo", value: "id", value1: "Agustina  Lescano"  },
		{ text: "Sín título", value: "id", value1: "Rafael  Mai"  },
		{ text: "Expiación", value: "id", value1: "Fabricio  Mándola"  },
		{ text: "El tercer día de invierno", value: "id", value1: "Jésica Lara  Marín"  },
		{ text: "Un tal Muñoz", value: "id", value1: "Leandro  Masuero"  },
		{ text: "Haiku", value: "id", value1: "María José  Medei"  },
		{ text: "¿Qué hago con estas semillas, Inés?", value: "id", value1: "Cristian  Mendoza"  },
		{ text: "Y no nos damos cuenta", value: "id", value1: "Agustín Franco  Montagna"  },
		{ text: "Escenarios", value: "id", value1: "Carolina Belén  Notta"  },
		{ text: "Partes", value: "id", value1: "Felipe  Ojalvo"  },
		{ text: "Coche", value: "id", value1: "Lisandro  Perrone"  },
		{ text: "En la clínica", value: "id", value1: "Marcos Alberto  Ramírez"  },
		{ text: "Yaguareté", value: "id", value1: "Damián  Ramírez"  },
		{ text: "Mi lluvia", value: "id", value1: "Enzo  Rojas"  },
		{ text: "Zona", value: "id", value1: "Julia  Ruiz"  },
		{ text: "Vitrea fracta", value: "id", value1: "Gimena  Sáenz"  },
		{ text: "Toxodon", value: "id", value1: "Miguel   Saigo"  },
		{ text: "Impresiones", value: "id", value1: "Federico  Schaumburg"  },
		{ text: "A la deriva", value: "id", value1: "Gustavo  Schnidrig"  },
		{ text: "Bicicleta", value: "id", value1: "Sofía  Storani"  },
		{ text: "Confesiones y comentarios", value: "id", value1: "Federico  Ternavasio"  },
		{ text: "Las agujas", value: "id", value1: "Ruth  Viale"  },
		{ text: "Las manos del otoño", value: "id", value1: "Franco  Vosca"  },
		{ text: "Poemas apócrifos", value: "id", value1: "Fabricio  Welschen"  },
		{ text: "Puerta de salida", value: "id", value1: "Lara  Yost"  },
		{ text: "Saudade", value: "id", value1: "Sebastián  Zurschmitten"  },	
								
	];

	$scope.serverSideChange = function(item) {
		if(item.value!=null)
		{
			var confirmPopup = $ionicPopup.confirm({
			title: 'Confirmar Ingreso',
			template: 'Esta seguro de votar la obra '+item.text+' de '+item.value1+'?'
			});
			confirmPopup.then(function(res) {
				if(res) {
					window.plugins.toast.showLongBottom("Gracias por su voto!");
					window.localStorage.setItem("voto_letras", item.value);
					$state.go('menu.vVisuales');
				}else{
					window.plugins.toast.showLongBottom("Voto Cancelado");
				}
			});
		}
	}
})

.controller('vVisualesCtrl', function($scope, $ionicModal, $ionicPopup, $state) {
	$scope.serverSideList = [
		{ 
			text: "Categoria A", 
			value: null
			},
		{ text: "Nos devora", value:"id", value1: "Delfina Angeles Acosta" },
		{ text: "Movimiento de una ciudad", value:"id", value1: "Matías Atzori" },
		{ text: "Tirria inmoral", value:"id", value1: "Guillermina Barrios" },
		{ text: "Él a través de mí", value:"id", value1: "Eleonora Bugna" },
		{ text: "Un mundo fantástico", value:"id", value1: "Melina Dafne Camero" },
		{ text: "Autorretrato", value:"id", value1: "Victoria Inés Camussi" },
		{ text: "Lo que oculta el pecho", value:"id", value1: "Ignacio Candioti" },
		{ text: "Voces olvidadas", value:"id", value1: "Ismael Cervantes" },
		{ text: "Elección acertada", value:"id", value1: "Ismael Cervantes" },
		{ text: "El pacto", value:"id", value1: "Tobías Cervantes" },
		{ text: "Insecto en sombras", value:"id", value1: "Lourdes Cosentino" },
		{ text: "Sin título", value:"id", value1: "Lourdes Cosentino" },
		{ text: "Cataclismo", value:"id", value1: "Camila  De Luca" },
		{ text: "Lola", value:"id", value1: "Luciana Daniela Dipierri" },
		{ text: "Huellas dactilares", value:"id", value1: "Luciana Daniela Dipierri" },
		{ text: "Sempiternal", value:"id", value1: "Mercedes  Fava" },
		{ text: "Miradas de Libertad", value:"id", value1: "Agustina Ferrero" },
		{ text: "Sin título", value:"id", value1: "Sofía Galván" },
		{ text: "Sin título", value:"id", value1: "Sofía Galván" },
		{ text: "Made in China", value:"id", value1: "Aylén Giraudo" },
		{ text: "Absurdo", value:"id", value1: "Florencia Rosario Gómez" },
		{ text: "Ambiguo", value:"id", value1: "Florencia Rosario Gómez" },
		{ text: "La nueva vida", value:"id", value1: "María Belén Kakisu" },
		{ text: "La alegría en calesita", value:"id", value1: "Valentina Manassero" },
		{ text: "Tristeza en vidrio empañado", value:"id", value1: "Valentina Manassero" },
		{ text: "Amnesia", value:"id", value1: "María Victoria Martínez" },
		{ text: "Mi obsesión", value:"id", value1: "Julieta Mazas" },
		{ text: "Contemplando el innito", value:"id", value1: "Antonella Mendez" },
		{ text: "Kyloren", value:"id", value1: "Diego Merchan" },
		{ text: "Yoda", value:"id", value1: "Diego Merchan" },
		{ text: "Del Revés", value:"id", value1: "Guillermina Puertas Puertas" },
		{ text: "El Paraíso", value:"id", value1: "Guillermina Puertas Puertas" },
		{ text: "Fantasma Cortado", value:"id", value1: "Claudina Quaini Arce" },
		{ text: "Santa Fe Gris", value:"id", value1: "Claudina Quaini Arce" },
		{ text: "El reejo", value:"id", value1: "Agustín Ramos Bucca" },
		{ text: "Paseo Nocturno & Seres", value:"id", value1: "Mauro Reible" },
		{ text: "Ocres y Oscuros de Intimidad Siestera", value:"id", value1: "Mauro Reible" },
		{ text: "Lola Gallo", value:"id", value1: "Juana Rodríguez" },
		{ text: "Abertura", value:"id", value1: "Juana Rondina" },
		{ text: "Spiritussomnia", value:"id", value1: "Martín Alejandro Rosso" },
		{ text: "EduardElric", value:"id", value1: "Pablo Ruscitti" },
		{ text: "Estando sin ser", value:"id", value1: "María Emilia Salami" },
		{ text: "Liberación", value:"id", value1: "Santiago Sánchez" },
		{ text: "Retratados", value:"id", value1: "Alfredo Sandoval" },
		{ text: "Miradas", value:"id", value1: "María Sol Suarez" },
		{ text: "A simple vista", value:"id", value1: "María Sol Suarez" },
		{ text: "Llega y espera", value:"id", value1: "Violeta Lucía Vignatti" },
		{ text: "Espejos", value:"id", value1: "Florentina Zanel Di Filippo" },
		{
			text: "Categoria B",
			value: null
		},
		{ text: "Casamarilla 1", value:"id", value1: "Virginia Agretti" },
		{ text: "Casamarilla 2", value:"id", value1: "Virginia Agretti" },
		{ text: "Emergente", value:"id", value1: "Maribel Amézaga" },
		{ text: "Envejecer", value:"id", value1: "Gianina Aralla" },
		{ text: "Casandra", value:"id", value1: "María del Rosario Bengochea" },
		{ text: "Made in China", value:"id", value1: "Francisco Javier Bergallo" },
		{ text: "En la cocina del chef", value:"id", value1: "Julio Caceres" },
		{ text: "Vacíos y llenos en colores", value:"id", value1: "Milena Calello" },
		{ text: "Sin título", value:"id", value1: "Yamila Caporizzo" },
		{ text: "Raigambre", value:"id", value1: "Micaela Carlini" },
		{ text: "Transición", value:"id", value1: "Lilian Castellanos" },
		{ text: "Melodía para mis devotos", value:"id", value1: "Esteban Corva" },
		{ text: "Paseo dominical", value:"id", value1: "Esteban Corva" },
		{ text: "Leia Cosicada", value:"id", value1: "Guido Diaz" },
		{ text: "Cerrando la inmensidad", value:"id", value1: "Guido Díaz" },
		{ text: "Deniendo el límite", value:"id", value1: "María Belén Donati" },
		{ text: "Arq. 1", value:"id", value1: "Leonardo Donnet" },
		{ text: "Arq. 2", value:"id", value1: "Leonardo Donnet" },
		{ text: "Simone de Beauvoir", value:"id", value1: "Josena Fava" },
		{ text: "Resistir", value:"id", value1: "Lucas Fernández" },
		{ text: "Tochi!", value:"id", value1: "Celeste Rebuffo" },
		{ text: "El autito del Pepe", value:"id", value1: "Celeste Rebuffo" },
		{ text: "Heaven", value:"id", value1: "Clara Franco" },
		{ text: "Nosotras", value:"id", value1: "Camila Franco" },
		{ text: "El pulpo", value:"id", value1: "María Fernanda Frangella" },
		{ text: "El Erudito", value:"id", value1: "Hernán F .Galiano" },
		{ text: "Cumulus Idearum", value:"id", value1: "Damián García" },
		{ text: "Copia tramada", value:"id", value1: "Lautaro García Fontana" },
		{ text: "Espejismo inconcluso", value:"id", value1: "Yoana  Gerelli" },
		{ text: "¿¡Qué mirás!?", value:"id", value1: "Yoana  Gerelli" },
		{ text: "Preludio", value:"id", value1: "Nicolás Ghieto" },
		{ text: "Eterno Retorno de lo Mismo", value:"id", value1: "Nicolás Ghieto" },
		{ text: "Escape Nocturno", value:"id", value1: "Gaspar Godino Bonet" },
		{ text: "Sin título", value:"id", value1: "María Belén Gómez" },
		{ text: "Corpóreo", value:"id", value1: "Camila Grosso" },
		{ text: "Sin título", value:"id", value1: "María Florencia Horn" },
		{ text: "Sin título", value:"id", value1: "Ivar Isea" },
		{ text: "Sin título", value:"id", value1: "Ivar Isea" },
		{ text: "De las personas en mí", value:"id", value1: "Iván Krauchuk" },
		{ text: "09-06-2015 11:25 hs", value:"id", value1: "Virginia Lazzaroni" },
		{ text: "EVA", value:"id", value1: "Romina, Lell" },
		{ text: "Revival", value:"id", value1: "Emmanuel Leonhardt" },
		{ text: "Loop", value:"id", value1: "Emmanuel Leonhardt" },
		{ text: "Tres Sesenta", value:"id", value1: "Pablo Esequiel Mansilla" },
		{ text: "Santa Fe", value:"id", value1: "Valentina Marín Plechuk" },
		{ text: "Cabeza de yacaré", value:"id", value1: "Alejandro Emanuel Martinez" },
		{ text: "Ligamentos", value:"id", value1: "María Virginia Martínez" },
		{ text: "El triángulo de las ternuras", value:"id", value1: "Marina Anabel Méndez" },
		{ text: "8 horas", value:"id", value1: "Vanesa Mendez" },
		{ text: "Ultramar", value:"id", value1: "Vanesa Mendez" },
		{ text: "Cuenta lo que viste", value:"id", value1: "Florencia Meyer" },
		{ text: "La góndola", value:"id", value1: "Colectivo artístico: Las Tres" },
		{ text: "Recadencia", value:"id", value1: "Fabiana Mir" },
		{ text: "Espejo de Agua", value:"id", value1: "Micaela Mira" },
		{ text: "Trazos en lo profundo", value:"id", value1: "Natalí Miranda" },
		{ text: "ca | río | ca", value:"id", value1: "María de la Cruz Montagna" },
		{ text: "Sin título", value:"id", value1: "María de la Cruz Montagna" },
		{ text: "Resplandece", value:"id", value1: "Emilia Mosso" },
		{ text: "Lo que conecta, la raíz del origen", value:"id", value1: "Magalí Sofía Moyano" },
		{ text: "Dioaberraz", value:"id", value1: "Juan Carlos Kaczmar" },
		{ text: "Free as a bird", value:"id", value1: "Dámaris Oliverio" },
		{ text: "Ensimismarse", value:"id", value1: "Amparo Ordóñez" },
		{ text: "Corazones al desnudo", value:"id", value1: "Fiorela Palmero" },
		{ text: "Chilean", value:"id", value1: "Lisandro Perrone" },
		{ text: "Estudio del Cristo bendiciendo...", value:"id", value1: "Marco Pinta" },
		{ text: "Estudio para un retrato de Juan Manuel Inchauspe", value:"id", value1: "Marco Pinta" },
		{ text: "El silencio estimula al verdugo", value:"id", value1: "Emiliano Previotto" },
		{ text: "La fuerza no es un remedio", value:"id", value1: "Emiliano Previotto" },
		{ text: "Transparencias", value:"id", value1: "Brenda Raviolo" },
		{ text: "Sincretismo Cultural: El soberbio, Misiones", value:"id", value1: "Emiliano Rico" },
		{ text: "Yiro", value:"id", value1: "Maria de los Ángeles  Rivero" },
		{ text: "Atrapasueños", value:"id", value1: "Juan José Rolón" },
		{ text: "Contextos", value:"id", value1: "Federico Ronchi" },
		{ text: "Este lado arriba", value:"id", value1: "Aron Joel Rouzaut" },
		{ text: "Recorrido laberíntico", value:"id", value1: "María de las Mercedes Ruiz" },
		{ text: "Resumen de vida", value:"id", value1: "Jésica María Belén Salvañac" },
		{ text: "Pesadillas", value:"id", value1: "Jésica María Belén Salvañac" },
		{ text: "Intentos Fallidos", value:"id", value1: "de Melisa Sampietro" },
		{ text: "Inocencia", value:"id", value1: "Camila Sánchez" },
		{ text: "Poligonal n°4", value:"id", value1: "Claudina Suarez" },
		{ text: "Fluorescentadolescent", value:"id", value1: "Irina Teper" },
		{ text: "Respirar", value:"id", value1: "Angelica Zubillaga" },
		{ text: "Blanco", value:"id", value1: "Gastón Zuñiga" },						
		{ text: "Negro", value:"id", value1: "Gastón Zuñiga" },		
	];
	$scope.serverSideChange = function(item) {
		if(item.value!=null)
		{
			var confirmPopup = $ionicPopup.confirm({
			title: 'Confirmar Ingreso',
			template: 'Esta seguro de votar la obra '+item.text+' de '+item.value1+'?'
			});
			confirmPopup.then(function(res) {
				if(res) {
					window.plugins.toast.showLongBottom("Gracias por su voto!");
					window.localStorage.setItem("voto_visuales", item.value);
					$state.go('menu.vLetras');
				}else{
					window.plugins.toast.showLongBottom("Voto Cancelado");
				} 
			});
		}
	}
})

.controller('vEscenicasCtrl', function($scope, $ionicModal, $ionicPopup, $state) {
			$scope.serverSideList = [
			{ text: "El barbero sin utopías",value: "id", value1: "Grupo Máscara Demoño" },
			{ text: "El Grito de la Jauría",value: "id", value1: "Aurática Compañía Teatral" },
			{ text: "EntrePapelADos",value: "id", value1: "Compañía teatral SOCORRO" },
			{ text: "Frida",value: "id", value1: "Compañía Vendaval" },
			{ text: "Ludosóca",value: "id", value1: "Grupo Máscara Demoño" },
			{ text: "Mestizaje",value: "id", value1: "Grupo Artístico" },
			{ text: "Orbium",value: "id", value1: "Grupo We love dancing" },
			{ text: "Retiro al norte",value: "id", value1: "Cristian Weihmuller" },
			{ text: "Tangos",value: "id", value1: "Damián David Albrecht y Ana Elisa Weidmann" }							
		];
	$scope.serverSideChange = function(item) {
		if(item.value!=null)
		{
			var confirmPopup = $ionicPopup.confirm({
			title: 'Confirmar Ingreso',
			template: 'Esta seguro de votar la obra '+item.text+' de '+item.value1+'?'
			});
			confirmPopup.then(function(res) {
				if(res) {
					window.plugins.toast.showLongBottom("Gracias por su voto!");
					window.localStorage.setItem("voto_escenicas", item.value);
					$state.go('menu.vAgradece');
				}else{
					window.plugins.toast.showLongBottom("Voto Cancelado");
				} 
			});
		}
	}
})

.controller('votacionCtrl', function($scope, $ionicModal, $ionicPopup, $state){

})