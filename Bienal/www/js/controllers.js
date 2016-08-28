angular.module('app.controllers', [])        

  //codigo feo por que nos pagaron poco por mucho xD
.controller('inicioCtrl', function($scope,$ionicModal,$ionicPopup) {
})


.controller('transmisionCtrl', function($scope,$ionicModal) {
	
})

.controller('musicaCtrl', function($scope, $ionicModal, $ionicPopup) {

	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir el evento en una Red Social' 
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
				var title = 'Dia 1 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Dia 2 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Dia 3 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Dia 4 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				var title = 'Dia 5 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 5:
				var title = 'Dia 6 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Dia 7 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 7:
				var title = 'Dia 8 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			default:
				console.log("no mejoramos el codigo si no nos pagan mas");
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
   
.controller('audioVisualesCtrl', function($scope, $ionicModal) {

	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir el evento en una Red Social' 
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
				var title = 'Dia 1 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Dia 2 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Dia 3 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Dia 4 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				var title = 'Dia 5 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 5:
				var title = 'Dia 6 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Dia 7 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 7:
				var title = 'Dia 8 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			default:
				console.log("no mejoramos el codigo si no nos pagan mas");
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
		var options = {message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir el evento en una Red Social' 
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
				var title = 'Dia 1 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Dia 2 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Dia 3 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Dia 4 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				var title = 'Dia 5 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 5:
				var title = 'Dia 6 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Dia 7 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 7:
				var title = 'Dia 8 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			default:
				console.log("no mejoramos el codigo si no nos pagan mas");
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

	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir el evento en una Red Social' 
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
				var title = 'Dia 1 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Dia 2 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Dia 3 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Dia 4 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				var title = 'Dia 5 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 5:
				var title = 'Dia 6 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Dia 7 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 7:
				var title = 'Dia 8 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			default:
				console.log("no mejoramos el codigo si no nos pagan mas");
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

   
.controller('escenicasCtrl', function($scope, $ionicModal, $ionicPopup) {
 
	$scope.createCalendarEvent = function(index, buttonIndex) {
		var options = {message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', 
		url: 'http://unl.edu.ar/bienal',
		chooserTitle: 'Compartir el evento en una Red Social' 
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
				var title = 'Dia 1 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 1:
				var title = 'Dia 2 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 2:
				var title = 'Dia 3 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 3:
				var title = 'Dia 4 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 4:
				var title = 'Dia 5 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 5:
				var title = 'Dia 6 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 6:
				var title = 'Dia 7 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
				var endDate = new Date("");
				var calendarName = "MyCal";
				var e = '';
				console.log(index);
				startDate.setMinutes(0);
				endDate.setMinutes(2400);
				startDate.setSeconds(0);
				break
			case 7:
				var title = 'Dia 8 interesante';
				var loc = 'algun lugar del mundo';
				var notes = 'My interesting Event notes.';
				var startDate = new Date("August 14, 2016");
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
			{ text: "Categoria A", value: null, value2: null},
			{ text: "Efraín Caraballo", value: "Efraín Caraballo", value2: "a" },
			{ text: "Habla La Muda", value: "Habla La Muda", value2: "a" },
			{ text: "Meraki", value: "Meraki", value2: "a" },
			{ text: "Rap Libre", value: "Rap Libre", value2: "a" },
			{ text: "Sin devolución", value: "Sin devolución", value2: "a" },
			{ text: "Sinner", value: "Sinner", value2: "a" },
			{ text: "Categoria B", value: null, value2: null },
			{ text: "Ajo Pachuco", value: "Ajo Pachuco", value2: "b" },
			{ text: "Alejandra Latosinsky", value: "Alejandra Latosinsky", value2: "b" },
			{ text: "ArteFacto", value: "ArteFacto", value2: "b" },
			{ text: "Balu", value: "Balu", value2: "b" },
			{ text: "Bordon Claro", value: "Bordon Claro", value2: "b" },
			{ text: "Candela en majuma", value: "Candela en majuma", value2: "b"},
			{ text: "Clemenza", value: "Clemenza", value2: "b"},
			{ text: "Copanahue", value: "Copanahue", value2: "b"},
			{ text: "Cosmudus", value: "Cosmudus", value2: "b"},
			{ text: "Dante Leonel", value: "Dante Leonel", value2: "b"},
			{ text: "Duo Cecchini-Somaglia", value: "Dúo Cecchini-Somaglia", value2: "b"},
			{ text: "Duo Sachayoj", value: "Duo Sachayoj", value2: "b"},
			{ text: "Edu Figueroa", value: "Edu Figueroa", value2: "b"},
			{ text: "Emi Billud", value: "Emi Billud", value2: "b"},
			{ text: "Emilia Cersoo", value: "Emilia Cersoo", value2: "b"},
			{ text: "Ensamble Sinfónico del Litoral", value: "Ensamble Sinfónico del Litoral", value2: "b"},
			{ text: "Equilátera", value: "Equilátera", value2: "b"},
			{ text: "Flores de tipa", value: "Flores de tipa", value2: "b"},
			{ text: "Furor Sanandi", value: "Furor Sanandi", value2: "b"},
			{ text: "GPS Trío", value: "GPS Trío", value2: "b"},
			{ text: "Guatusai", value: "Guatusai", value2: "b"},
			{ text: "Gustavo De Marco", value: "Gustavo De Marco", value2: "b"},
			{ text: "Juane Voutat", value: "Juane Voutat", value2: "b"},
			{ text: "La conexión", value: "La conexión", value2: "b"},
			{ text: "La vituela", value: "La vituela", value2: "b"}, 
			{ text: "Las Damajuanas", value: "Las Damajuanas", value2: "b"},
			{ text: "Las garras de betún", value: "Las garras de betún", value2: "b"},
			{ text: "Liebre", value: "Liebre", value2: "b"},
			{ text: "Los cuervos", value: "Los cuervos", value2: "b"},
			{ text: "Mastodonte", value: "Mastodonte", value2: "b"},
			{ text: "Mayday", value: "Mayday", value2: "b"},
			{ text: "Mi ambulancia negra", value: "Mi ambulancia negra", value2: "b"},
			{ text: "Mu.Lit.A (Músicos del Litoral Argentino)", value: "Mu.Lit.A (Músicos del Litoral Argentino)", value2: "b"},
			{ text: "Nada Más y Nada Menos", value: "Nada Más y Nada Menos", value2: "b"},
			{ text: "Nativos Mutantes", value: "Nativos Mutantes", value2: "b"},
			{ text: "Naub", value: "Naub", value2: "b"},
			{ text: "Non Bis", value: "Non Bis", value2: "b"},
			{ text: "Notargiano Tavella Parrilla Trío", value: "Notargiano Tavella Parrilla Trío", value2: "b"},
			{ text: "Órco", value: "Órco", value2: "b"},
			{ text: "Parzival", value: "Parzival", value2: "b"},
			{ text: "QunQay", value: "QunQay", value2: "b"},
			{ text: "Río loco", value: "Río loco", value2: "b"},
			{ text: "Santa fe Jazz Ensamble Junior", value: "Santa fe Jazz Ensamble Junior", value2: "b"},
			{ text: "Santa Karma", value: "Santa Karma", value2: "b"},
			{ text: "Sine Die", value: "Sine Die", value2: "b"},
			{ text: "Skamas", value: "Skamas", value2: "b"},
			{ text: "Subliminal", value: "Subliminal", value2: "b"},
			{ text: "Tabula Rasa", value: "Tabula Rasa", value2: "b"},
			{ text: "Tembleque", value: "Tembleque", value2: "b"},
			{ text: "The experience", value: "The experience", value2: "b"},
			{ text: "Trío Tres Hileras", value: "Trío Tres Hileras", value2: "b"}, 
			{ text: "Último trago", value: "Último trago", value2: "b"},
			{ text: "Vaso Exquisito", value: "Vaso Exquisito", value2: "b"},
			{ text: "Vaya Paradoja!", value: "Vaya Paradoja!", value2: "b"},
			{ text: "Zen Sessions", value: "Zen Sessions", value2: "b"}
		];

		$scope.serverSideChange = function(item) {
				if(item.value!=null)
				{
					var confirmPopup = $ionicPopup.confirm({
							title: 'Confirmar Ingreso',
							template: 'Esta conforme con su voto?'
						});
							confirmPopup.then(function(res) {
							if(res) {
								window.plugins.toast.showLongBottom("Gracias por su voto!");
								window.localStorage.setItem("titulo", item.value);
								window.localStorage.setItem("nombre", "");
								window.localStorage.setItem("apellido", "");
								window.localStorage.setItem("pseudonimo", item.value);
								window.localStorage.setItem("categoria", "musica");
								window.localStorage.setItem("clase", item.value2);
								//$state.go('menu.vAV');
							}else{
								window.plugins.toast.showLongBottom("Voto Cancelado");
							} 
						});
				}
		}
	})

.controller('vAVCtrl', function($scope, $ionicModal, $ionicPopup, $state) {

		$scope.serverSideList = [
			{ text: "Categoria A", value: null, value2: null},
			{ text: "Efraín Caraballo", value: "Efraín Caraballo", value2: "a" },
			{ text: "Habla La Muda", value: "Habla La Muda", value2: "a" },
			{ text: "Meraki", value: "Meraki", value2: "a" },
			{ text: "Rap Libre", value: "Rap Libre", value2: "a" },
			{ text: "Sin devolución", value: "Sin devolución", value2: "a" },
			{ text: "Sinner", value: "Sinner", value2: "a" },
			{ text: "Categoria B", value: null, value2: null },
			{ text: "Ajo Pachuco", value: "Ajo Pachuco", value2: "b" },
			{ text: "Alejandra Latosinsky", value: "Alejandra Latosinsky", value2: "b" },
			{ text: "ArteFacto", value: "ArteFacto", value2: "b" },
			{ text: "Balu", value: "Balu", value2: "b" },
			{ text: "Bordon Claro", value: "Bordon Claro", value2: "b" },
			{ text: "Candela en majuma", value: "Candela en majuma", value2: "b"},
			{ text: "Clemenza", value: "Clemenza", value2: "b"},
			{ text: "Copanahue", value: "Copanahue", value2: "b"},
			{ text: "Cosmudus", value: "Cosmudus", value2: "b"},
			{ text: "Dante Leonel", value: "Dante Leonel", value2: "b"},
			{ text: "Duo Cecchini-Somaglia", value: "Dúo Cecchini-Somaglia", value2: "b"},
			{ text: "Duo Sachayoj", value: "Duo Sachayoj", value2: "b"},
			{ text: "Edu Figueroa", value: "Edu Figueroa", value2: "b"},
			{ text: "Emi Billud", value: "Emi Billud", value2: "b"},
			{ text: "Emilia Cersoo", value: "Emilia Cersoo", value2: "b"},
			{ text: "Ensamble Sinfónico del Litoral", value: "Ensamble Sinfónico del Litoral", value2: "b"},
			{ text: "Equilátera", value: "Equilátera", value2: "b"},
			{ text: "Flores de tipa", value: "Flores de tipa", value2: "b"},
			{ text: "Furor Sanandi", value: "Furor Sanandi", value2: "b"},
			{ text: "GPS Trío", value: "GPS Trío", value2: "b"},
			{ text: "Guatusai", value: "Guatusai", value2: "b"},
			{ text: "Gustavo De Marco", value: "Gustavo De Marco", value2: "b"},
			{ text: "Juane Voutat", value: "Juane Voutat", value2: "b"},
			{ text: "La conexión", value: "La conexión", value2: "b"},
			{ text: "La vituela", value: "La vituela", value2: "b"}, 
			{ text: "Las Damajuanas", value: "Las Damajuanas", value2: "b"},
			{ text: "Las garras de betún", value: "Las garras de betún", value2: "b"},
			{ text: "Liebre", value: "Liebre", value2: "b"},
			{ text: "Los cuervos", value: "Los cuervos", value2: "b"},
			{ text: "Mastodonte", value: "Mastodonte", value2: "b"},
			{ text: "Mayday", value: "Mayday", value2: "b"},
			{ text: "Mi ambulancia negra", value: "Mi ambulancia negra", value2: "b"},
			{ text: "Mu.Lit.A (Músicos del Litoral Argentino)", value: "Mu.Lit.A (Músicos del Litoral Argentino)", value2: "b"},
			{ text: "Nada Más y Nada Menos", value: "Nada Más y Nada Menos", value2: "b"},
			{ text: "Nativos Mutantes", value: "Nativos Mutantes", value2: "b"},
			{ text: "Naub", value: "Naub", value2: "b"},
			{ text: "Non Bis", value: "Non Bis", value2: "b"},
			{ text: "Notargiano Tavella Parrilla Trío", value: "Notargiano Tavella Parrilla Trío", value2: "b"},
			{ text: "Órco", value: "Órco", value2: "b"},
			{ text: "Parzival", value: "Parzival", value2: "b"},
			{ text: "QunQay", value: "QunQay", value2: "b"},
			{ text: "Río loco", value: "Río loco", value2: "b"},
			{ text: "Santa fe Jazz Ensamble Junior", value: "Santa fe Jazz Ensamble Junior", value2: "b"},
			{ text: "Santa Karma", value: "Santa Karma", value2: "b"},
			{ text: "Sine Die", value: "Sine Die", value2: "b"},
			{ text: "Skamas", value: "Skamas", value2: "b"},
			{ text: "Subliminal", value: "Subliminal", value2: "b"},
			{ text: "Tabula Rasa", value: "Tabula Rasa", value2: "b"},
			{ text: "Tembleque", value: "Tembleque", value2: "b"},
			{ text: "The experience", value: "The experience", value2: "b"},
			{ text: "Trío Tres Hileras", value: "Trío Tres Hileras", value2: "b"}, 
			{ text: "Último trago", value: "Último trago", value2: "b"},
			{ text: "Vaso Exquisito", value: "Vaso Exquisito", value2: "b"},
			{ text: "Vaya Paradoja!", value: "Vaya Paradoja!", value2: "b"},
			{ text: "Zen Sessions", value: "Zen Sessions", value2: "b"}
		];

		$scope.serverSideChange = function(item, index) {
			var indice = index;
				if(item.value!=null)
				{
					var confirmPopup = $ionicPopup.confirm({
							title: 'Confirmar Ingreso',
							template: 'Esta conforme con su voto?'
						});
							confirmPopup.then(function(res) {
							if(res) {
								window.plugins.toast.showLongBottom("Gracias por su voto!");
								window.localStorage.setItem("titulo", item.value);
								window.localStorage.setItem("nombre", "");
								window.localStorage.setItem("apellido", "");
								window.localStorage.setItem("pseudonimo", item.value);
								window.localStorage.setItem("categoria", "musica");
								window.localStorage.setItem("clase", item.value2);
								$state.go('menu.vAV');
							}else{
								window.plugins.toast.showLongBottom("Voto Cancelado");
							} 
						});
				}
		}
	})

.controller('votacionCtrl', function($scope, $ionicModal, $ionicPopup, $state){	})