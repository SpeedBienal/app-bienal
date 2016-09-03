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
		{ text: "Efraín Caraballo", value: "57c9e24bc25136ba0c9699f6" },
		{ text: "Habla La Muda", value: "57c9e2acc25136ba0c9699f8" },
		{ text: "Meraki", value: "57c9e2c1c25136ba0c9699fa" },
		{ text: "Rap Libre", value: "57c9ea31c25136ba0c969a8a" },
		{ text: "Sin devolución", value: "57c9e386c25136ba0c9699fd" },
		{ text: "Sinner", value: "57c9e39dc25136ba0c9699fe" },
		{ text: "Categoria B", value: null },
		{ text: "Ajo Pachuco", value: "57c9ea69c25136ba0c969a8e" },
		{ text: "Alejandra Latosinsky", value: "57c9e3ccc25136ba0c969a00" },
		{ text: "ArteFacto", value: "57c9eabbc25136ba0c969a90" },
		{ text: "Balu", value: "57c9e428c25136ba0c969a06" },
		{ text: "Bordon Claro", value: "57c9e455c25136ba0c969a0a" },
		{ text: "Candela en majuma", value: "57c9e465c25136ba0c969a0e" },
		{ text: "Clemenza", value: "57c9e480c25136ba0c969a0f"},
		{ text: "Copanahue", value: "57c9e498c25136ba0c969a11"},
		{ text: "Cosmudus", value: "57c9e4b9c25136ba0c969a13"},
		{ text: "Dante Leonel", value: "57c9e4c8c25136ba0c969a14"},
		{ text: "Duo Cecchini-Somaglia", value: "57c9e4ebc25136ba0c969a16"},
		{ text: "Duo Sachayoj", value: "57c9eb41c25136ba0c969a9a"},
		{ text: "Edu Figueroa", value: "57c9e517c25136ba0c969a1d"},
		{ text: "Emi Billud", value: "57c9e5a0c25136ba0c969a25"},
		{ text: "Emilia Cersofio", value: "57c9e5b0c25136ba0c969a26"},
		{ text: "Ensamble Sinfónico del Litoral", value: "57c9e5c6c25136ba0c969a28"},
		{ text: "Equilátera", value: "57c9e5d4c25136ba0c969a2c"},
		{ text: "Flores de tipa", value: "57c9e5d4c25136ba0c969a2c"},
		{ text: "Furor Sanandi", value: "57c9e5f8c25136ba0c969a30"},
		{ text: "GPS Trío", value: "57c9e615c25136ba0c969a33"},
		{ text: "Guatusai", value: "57c9e632c25136ba0c969a37"},
		{ text: "Gustavo De Marco", value: "57c9e641c25136ba0c969a38"},
		{ text: "Juane Voutat", value: "57c9e650c25136ba0c969a39"},
		{ text: "La conexión", value: "57c9e664c25136ba0c969a3d"},
		{ text: "La vituela", value: "57c9e67ac25136ba0c969a42"}, 
		{ text: "Las Damajuanas", value: "57c9e688c25136ba0c969a46"},
		{ text: "Las garras de betún", value: "57c9e695c25136ba0c969a48"},
		{ text: "Liebre", value: "57c9e6a3c25136ba0c969a49"},
		{ text: "Los cuervos", value: "57c9e6b3c25136ba0c969a4a"},
		{ text: "Mastodonte", value: "57c9eb63c25136ba0c969a9c"},
		{ text: "Mayday", value: "57c9e6d0c25136ba0c969a52"},
		{ text: "Mi ambulancia negra", value: "57c9e6dec25136ba0c969a54"},
		{ text: "Mu.Lit.A (Músicos del Litoral Argentino)", value: "57c9e6eec25136ba0c969a56"},
		{ text: "Nada Más y Nada Menos", value: "57c9e6fbc25136ba0c969a57"},
		{ text: "Nativos Mutantes", value: "57c9e709c25136ba0c969a58"},
		{ text: "Naub", value: "57c9e732c25136ba0c969a5c"},
		{ text: "Non Bis", value: "57c9e73fc25136ba0c969a5e"},
		{ text: "Notargiano Tavella Parrilla Trío", value: "57c9e7b7c25136ba0c969a63"},
		{ text: "Órfico", value: "57c9ead8c25136ba0c969a92"},
		{ text: "Parvizal", value: "57c9e7d7c25136ba0c969a65"},
		{ text: "QunQay", value: "57c9e7e5c25136ba0c969a67"},
		{ text: "Río loco", value: "57c9e7f1c25136ba0c969a68"},
		{ text: "Santa fe Jazz Ensamble Junior", value: "57c9e806c25136ba0c969a6a"},
		{ text: "Santa Karma", value: "57c9e815c25136ba0c969a6c"},
		{ text: "Sine Die", value: "57c9e826c25136ba0c969a6d"},
		{ text: "Skamas", value: "57c9e833c25136ba0c969a6e"},
		{ text: "Subliminal", value: "57c9e841c25136ba0c969a71"},
		{ text: "Tabula Rasa", value: "57c9ebe6c25136ba0c969aa1"},
		{ text: "Tembleque", value: "57c9e861c25136ba0c969a76"},
		{ text: "The experience", value: "57c9e86fc25136ba0c969a78"},
		{ text: "Trío Tres Hileras", value: "57c9e88cc25136ba0c969a7a"}, 
		{ text: "Último trago", value: "57c9e898c25136ba0c969a7c"},
		{ text: "Vaso Exquisito", value: "57c9e8a7c25136ba0c969a7d"},
		{ text: "Vaya Paradoja!", value: "57c9e8b5c25136ba0c969a7e"},
		{ text: "Zen Sessions", value: "57c9ec3cc25136ba0c969aa5"}
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
		{ text: "Sustancia", value: "57c9dd88c25136ba0c9699e8", value1: "Grupo VEF" },
		{ text: "Irkalia: La vida después de la muerte", value: "57c9ddbbc25136ba0c9699e9", value1: "Grupo Irkalia" },
		{ text: "La Reina Roja", value: "57c9de2fc25136ba0c9699ea", value1: "Grupo Puente Carretero" },
		{ text: "Sueños", value: "57c9de8dc25136ba0c9699eb", value1: "Pierina Fiorentini" },
		{ text: "Siedemnascie", value: "57c9dec8c25136ba0c9699ec", value1: "Violeta Lucía Vignatti" },
		{ text: "Categoria B", value: null, value2: null },
		{ text: "Capitanelli y la nueva generación", value: "57c9defec25136ba0c9699ed", value1: "Grupo Tertium Quid" },
		{ text: "Punto medio", value: "57c9df1bc25136ba0c9699ee", value1: "Grupo BVC Santa Fe" },
		{ text: "Paranoicus", value: "57c9df47c25136ba0c9699ef", value1: "Luciana Figueroa" },
		{ text: "Donde no hay nada", value: "57c9ee95c25136ba0c969aad", value1: "Milton Secchi" },
		{ text: "Reflexiones I", value: "57c9eee5c25136ba0c969aae", value1: "Federico Roldan Vukonich" },
		{ text: "L.", value: "57c9eef8c25136ba0c969aaf", value1: "Adrián Regnier" },
		{ text: "Waorani", value: "57c9ef54c25136ba0c969ab1", value1: "Grupo km sur" },
		{ text: "Video Juego Bogüis de Nola", value: "57c9ef7fc25136ba0c969ab2", value1: "Grupo Bogüitas" },
		{ text: "La Cuarta Pared", value: "57c9efa3c25136ba0c969ab5", value1: "Lautaro Schjurjin" },
		{ text: "Inside a Wolf", value: "57c9efd2c25136ba0c969ab7", value1: "Grupo Perez Campos, Pergolesi, Torti" },
		{ text: "Italia", value: "57c9f06ac25136ba0c969ab8", value1: "Grupo Oblivio" },
		{ text: "Parar El Tiempo", value: "57c9f08ec25136ba0c969ab9", value1: "Grupo Abre" },
		{ text: "En El Taller", value: "57c9f0a0c25136ba0c969abb", value1: "Grupo Cristian Matt Hungo Deicas" },
		{ text: "Tonada de luna llena ", value: "57c9f0ecc25136ba0c969ac9", value1: "Emilia Vergara" }
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
		{ text: "En la eterna oscuridad", value: "57c9f95ac25136ba0c969c3b", value1: "Santiago  Alcántara"  },
		{ text: "A contrareloj", value: "57c9f982c25136ba0c969c49", value1: "Diego  Bonino"  },
		{ text: "Máquina (in)diferencial", value: "57c9f99dc25136ba0c969c4d", value1: "Lautaro  Cosentino"  },
		{ text: "No te voy a exigir día", value: "57c9fab2c25136ba0c969c4e", value1: "Agustina Belén  Decoud"  },
		{ text: "Justicia divina", value: "57c9fad8c25136ba0c969c50", value1: "María de los Milagros  Freyre"  },
		{ text: "Más allá de la oscuridad", value: "57c9faf9c25136ba0c969c51", value1: "Agustina  Gorosito"  },
		{ text: "Somos Únicos", value: "57c9fb38c25136ba0c969c5d", value1: "María Belén  Kakisu"  },
		{ text: "Demonios", value: "57c9fbd4c25136ba0c969c82", value1: "Victoria  Lordi"  },
		{ text: "Mis pensamientos", value: "57c9fbf3c25136ba0c969c86", value1: "Tomás  Musetti"  },
		{ text: "Pensar", value: "57c9fc70c25136ba0c969caa", value1: "Guillermina  Puertas"  },
		{ text: "Aspirinas", value: "57c9fce1c25136ba0c969cca", value1: "Joaquín  Urrutia"  },
		{ text: "Categoia B", value: null },
		{ text: "Escapes", value: "57c9fe55c25136ba0c969ce9", value1: "Ariel  Aguirre"  },
		{ text: "Nuevas tecnologías", value: "57c9fe6fc25136ba0c969ceb", value1: "Germán  Bartizzaghi"  },
		{ text: "Señorita", value: "57c9fe85c25136ba0c969cf0", value1: "Milena  Beltrame"  },
		{ text: "La casa de la mamá de mi mamá", value: "57ca6b08b769b9933b7f065a", value1: "Jeremías  Boer"  },
		{ text: "Filtraciones", value: "57ca6b27b769b9933b7f065b", value1: "Albano  Borotto"  },
		{ text: "Suplente", value: "57ca6b34b769b9933b7f065c", value1: "Emiliano  Bustos"  },
		{ text: "Cotidiano", value: "57ca6b4fb769b9933b7f065d", value1: "Pilar  Cabré"  },
		{ text: "Vagancias", value: "57ca6b96b769b9933b7f065e", value1: "Rosario  Caminos"  },
		{ text: "7 noches", value: "57ca6bb7b769b9933b7f0660", value1: "Leonel  Collazo"  },
		{ text: "Rumbo", value: "57ca6cb2b769b9933b7f0663", value1: "Facundo  Coronel"  },
		{ text: "Baquelita", value: "57ca6d22b769b9933b7f0667", value1: "Larisa  Cumin"  },
		{ text: "Lo fantástico", value: "57ca6d4eb769b9933b7f0669", value1: "Elián  del Mestre"  },
		{ text: "Renombrar", value: "57ca6d5bb769b9933b7f066a", value1: "María Lucía  Fernández"  },
		{ text: "De Otro", value: "57ca6dd3b769b9933b7f0671", value1: "María del Carmen  Fuentes"  },
		{ text: "Des-empastillado", value: "57ca6e1cb769b9933b7f0677", value1: "Jorgelina Mercedes  Giliberti"  },
		{ text: "Clavel", value: "57ca6e12b769b9933b7f0676", value1: "Sofía  Giombini"  },
		{ text: "De nosotros (tríptico)", value: "57ca6e85b769b9933b7f067f", value1: "Priscila Daiana  Hernández"  },
		{ text: "Cumbre", value: "57ca6e63b769b9933b7f067d", value1: "Martín Gabriel  Imvinkelried"  },
		{ text: "El centro del mundo", value: "57ca6f46b769b9933b7f0688", value1: "Agustina  Lescano"  },
		{ text: "Sín título", value: "57ca7027b769b9933b7f0696", value1: "Rafael  Mai"  },
		{ text: "Expiación", value: "57ca6ec5b769b9933b7f0683", value1: "Fabricio  Mándola"  },
		{ text: "El tercer día de invierno", value: "57ca6f69b769b9933b7f068a", value1: "Jésica Lara  Marín"  },
		{ text: "Un tal Muñoz", value: "57ca6f65b769b9933b7f0689", value1: "Leandro  Masuero"  },
		{ text: "Haiku", value: "57ca6f96b769b9933b7f068d", value1: "María José  Medei"  },
		{ text: "¿Qué hago con estas semillas, Inés?", value: "57ca6ff9b769b9933b7f0693", value1: "Cristian  Mendoza"  },
		{ text: "Y no nos damos cuenta", value: "57ca7003b769b9933b7f0694", value1: "Agustín Franco  Montagna"  },
		{ text: "Escenarios", value: "57ca703fb769b9933b7f0697", value1: "Carolina Belén  Notta"  },
		{ text: "Partes", value: "57ca7054b769b9933b7f0699", value1: "Felipe  Ojalvo"  },
		{ text: "Coche", value: "57ca7062b769b9933b7f069a", value1: "Lisandro  Perrone"  },
		{ text: "En la clínica", value: "57ca708db769b9933b7f069d", value1: "Marcos Alberto  Ramírez"  },
		{ text: "Yaguareté", value: "57ca70a5b769b9933b7f069f", value1: "Damián  Ramírez"  },
		{ text: "Mi lluvia", value: "57ca70a0b769b9933b7f069e", value1: "Enzo  Rojas"  },
		{ text: "Zona", value: "57ca70c5b769b9933b7f06a2", value1: "Julia  Ruiz"  },
		{ text: "Vitrea fracta", value: "57ca70ccb769b9933b7f06a3", value1: "Gimena  Sáenz"  },
		{ text: "Toxodon", value: "57ca70deb769b9933b7f06a5", value1: "Miguel   Saigo"  },
		{ text: "Impresiones", value: "57ca70feb769b9933b7f06a8", value1: "Federico  Schaumburg"  },
		{ text: "A la deriva", value: "57ca70feb769b9933b7f06a7", value1: "Gustavo  Schnidrig"  },
		{ text: "Bicicleta", value: "57ca7117b769b9933b7f06a9", value1: "Sofía  Storani"  },
		{ text: "Confesiones y comentarios", value: "57ca7118b769b9933b7f06aa", value1: "Federico  Ternavasio"  },
		{ text: "Las agujas", value: "57ca7149b769b9933b7f06ac", value1: "Ruth  Viale"  },
		{ text: "Las manos del otoño", value: "57ca7155b769b9933b7f06ae", value1: "Franco  Vosca"  },
		{ text: "Poemas apócrifos", value: "57ca71dcb769b9933b7f06b1", value1: "Fabricio  Welschen"  },
		{ text: "Puerta de salida", value: "57ca718ab769b9933b7f06b0", value1: "Lara  Yost"  },
		{ text: "Saudade", value: "57ca71e0b769b9933b7f06b2", value1: "Sebastián  Zurschmitten"  },	
								
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
					$state.go('menu.vEscenicas');
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
					    $scope.enviar_voto = function () {
						var obj = {};
						obj.nombre = window.localStorage.getItem(NombreP);
						obj.apellido = window.localStorage.getItem(ApellidoP);
						obj.dni = window.localStorage.getItem(DniP);
						obj.email = window.localStorage.getItem(EmailP);
						obj.uuid = window.localStorage.getItem(uuid);
						obj.voto_audiovisuales = $scope.voto_audiovisuales;
						obj.voto_visuales = $scope.voto_visuales;
						obj.voto_musica = $scope.voto_musica;
						obj.voto_escenicas = $scope.voto_escenicas;
						obj.voto_letras = $scope.voto_letras;
						
						personasService.enviar_voto( obj ).then(function (res) {
							$state.go('agradecimiento');
						},function (res) {
							console.log('Errores al enviar voto al servidor');
						});
						};
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