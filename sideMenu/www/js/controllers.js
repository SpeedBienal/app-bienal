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
			window.plugins.toast.showLongBottom("Compartido con éxito!");
		console.log("Share completed? " + result.completed); 
		console.log("Shared to app: " + result.app); 
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
			window.plugins.toast.showLongBottom("Compartido con éxito!");
		console.log("Share completed? " + result.completed); 
		console.log("Shared to app: " + result.app); 
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
			window.plugins.toast.showLongBottom("Compartido con éxito!");
		console.log("Share completed? " + result.completed); 
		console.log("Shared to app: " + result.app); 
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
			window.plugins.toast.showLongBottom("Compartido con éxito!");
		console.log("Share completed? " + result.completed); 
		console.log("Shared to app: " + result.app); 
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
			window.plugins.toast.showLongBottom("Compartido con éxito!");
		console.log("Share completed? " + result.completed); 
		console.log("Shared to app: " + result.app); 
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
		if((NombreP || ApellidoP || DniP || EmailP)!=null)
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

.controller('vMusicaCtrl', function($scope, $ionicModal, $ionicPopup) {
		var titulo = null;
		var autor = null;
		var categoria = null;

	 $scope.serverSideListA = [
		{ text: "Efraín Caraballo"},
		{ text: "Habla La Muda"},
		{ text: "Meraki"},
		{ text: "Rap Libre"},
		{ text: "Sin devolución"},
		{ text: "Sinner"},
		{ text: "Categoria B", value: null },
		{ text: "Ajo Pachuco", value: "Ajo Pachuco" },
		{ text: "Alejandra Latosinsky", value: "Alejandra Latosinsky" },
		{ text: "ArteFacto", value: "ArteFacto" },
		{ text: "Balu", value: "Balu" },
		{ text: "Bordon Claro", value: "Bordon Claro" },
		{ text: "Candela en majuma", value: "Candela en majuma"},
		{ text: "Clemenza", value: "Clemenza"},
		{ text: "Copanahue", value: "Copanahue"},
		{ text: "Cosmudus", value: "Cosmudus"},
		{ text: "Dante Leonel", value: "Dante Leonel"},
		{ text: "Duo Cecchini-Somaglia", value: "Dúo Cecchini-Somaglia"},
		{ text: "Duo Sachayoj", value: "Duo Sachayoj"},
		{ text: "Edu Figueroa", value: "Edu Figueroa"},
		{ text: "Emi Billud", value: "Emi Billud"},
		{ text: "Emilia Cersoo", value: "Emilia Cersoo"},
		{ text: "Ensamble Sinfónico del Litoral", value: "Ensamble Sinfónico del Litoral"},
		{ text: "Equilátera", value: "Equilátera"},
		{ text: "Flores de tipa", value: "Flores de tipa"},
		{ text: "Furor Sanandi", value: "Furor Sanandi"},
		{ text: "GPS Trío", value: "GPS Trío"},
		{ text: "Guatusai", value: "Guatusai"},
		{ text: "Gustavo De Marco", value: "Gustavo De Marco"},
		{ text: "Juane Voutat", value: "Juane Voutat"},
		{ text: "La conexión", value: "La conexión"},
		{ text: "La vituela", value: "La vituela"}, 
		{ text: "Las Damajuanas", value: "Las Damajuanas"},
		{ text: "Las garras de betún", value: "Las garras de betún"},
		{ text: "Liebre", value: "Liebre"},
		{ text: "Los cuervos", value: "Los cuervos"},
		{ text: "Mastodonte", value: "Mastodonte"},
		{ text: "Mayday", value: "Mayday"},
		{ text: "Mi ambulancia negra", value: "Mi ambulancia negra"},
		{ text: "Mu.Lit.A (Músicos del Litoral Argentino)", value: "Mu.Lit.A (Músicos del Litoral Argentino)"},
		{ text: "Nada Más y Nada Menos", value: "Nada Más y Nada Menos"},
		{ text: "Nativos Mutantes", value: "Nativos Mutantes"},
		{ text: "Naub", value: "Naub"},
		{ text: "Non Bis", value: "Non Bis"},
		{ text: "Notargiano Tavella Parrilla Trío", value: "Notargiano Tavella Parrilla Trío"},
		{ text: "Órco", value: "Órco"},
		{ text: "Parzival", value: "Parzival"},
		{ text: "QunQay", value: "QunQay"},
		{ text: "Río loco", value: "Río loco"},
		{ text: "Santa fe Jazz Ensamble Junior", value: "Santa fe Jazz Ensamble Junior"},
		{ text: "Santa Karma", value: "Santa Karma"},
		{ text: "Sine Die", value: "Sine Die"},
		{ text: "Skamas", value: "Skamas"},
		{ text: "Subliminal", value: "Subliminal"},
		{ text: "Tabula Rasa", value: "Tabula Rasa"},
		{ text: "Tembleque", value: "Tembleque"},
		{ text: "The experience", value: "The experience"},
		{ text: "Trío Tres Hileras", value: "Trío Tres Hileras"}, 
		{ text: "Último trago", value: "Último trago"},
		{ text: "Vaso Exquisito", value: "Vaso Exquisito"},
		{ text: "Vaya Paradoja!", value: "Vaya Paradoja!"},
		{ text: "Zen Sessions", value: "Zen Sessions"}
	];

	$scope.serverSideChange = function(item) {
		if(item.value!=null)
		{
		var votMusica = item.value;
		var confirmPopup = $ionicPopup.confirm({
			title: 'Confirmar Ingreso',
			template: 'Esta conforme con su voto?'
		});
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.toast.showLongBottom("Gracias por su voto!");
				window.localStorage.setItem("musica", votMusica);
				$state.go('menu.vAV');
			}
			else
			{
				item.value.
				window.plugins.toast.showLongBottom("Voto Cancelado");
			}
		  
			})
  		} else
		  {
			  $ionicPopup.alert({
					title: 'Por favor..',
					template: 'Categoria B no es un grupo, por favor seleccione otro'
				});
		  }
	};
})

.controller('vAV', function($scope, $ionicModal, $ionicPopup) {

	 $scope.serverSideList = [
		{ text: "Sustancia", value: "Sustancia" },
		{ text: "Habla La Muda", value: "Habla La Muda" },
		{ text: "Meraki", value: "Meraki" },
		{ text: "Rap Libre", value: "Rap Libre" },
		{ text: "Sin devolución", value: "Sin devolución" },
		{ text: "Sinner", value: "Sinner" },
		{ text: "Categoria B", value: null },
		{ text: "Ajo Pachuco", value: "Ajo Pachuco" },
		{ text: "Alejandra Latosinsky", value: "Alejandra Latosinsky" },
		{ text: "ArteFacto", value: "ArteFacto" },
		{ text: "Balu", value: "Balu" },
		{ text: "Bordon Claro", value: "Bordon Claro" },
		{ text: "Candela en majuma", value: "Candela en majuma"},
		{ text: "Clemenza", value: "Clemenza"},
		{ text: "Copanahue", value: "Copanahue"},
		{ text: "Cosmudus", value: "Cosmudus"},
		{ text: "Dante Leonel", value: "Dante Leonel"},
		{ text: "Duo Cecchini-Somaglia", value: "Dúo Cecchini-Somaglia"},
		{ text: "Duo Sachayoj", value: "Duo Sachayoj"},
		{ text: "Edu Figueroa", value: "Edu Figueroa"},
		{ text: "Emi Billud", value: "Emi Billud"},
		{ text: "Emilia Cersoo", value: "Emilia Cersoo"},
		{ text: "Ensamble Sinfónico del Litoral", value: "Ensamble Sinfónico del Litoral"},
		{ text: "Equilátera", value: "Equilátera"},
		{ text: "Flores de tipa", value: "Flores de tipa"},
		{ text: "Furor Sanandi", value: "Furor Sanandi"},
		{ text: "GPS Trío", value: "GPS Trío"},
		{ text: "Guatusai", value: "Guatusai"},
		{ text: "Gustavo De Marco", value: "Gustavo De Marco"},
		{ text: "Juane Voutat", value: "Juane Voutat"},
		{ text: "La conexión", value: "La conexión"},
		{ text: "La vituela", value: "La vituela"}, 
		{ text: "Las Damajuanas", value: "Las Damajuanas"},
		{ text: "Las garras de betún", value: "Las garras de betún"},
		{ text: "Liebre", value: "Liebre"},
		{ text: "Los cuervos", value: "Los cuervos"},
		{ text: "Mastodonte", value: "Mastodonte"},
		{ text: "Mayday", value: "Mayday"},
		{ text: "Mi ambulancia negra", value: "Mi ambulancia negra"},
		{ text: "Mu.Lit.A (Músicos del Litoral Argentino)", value: "Mu.Lit.A (Músicos del Litoral Argentino)"},
		{ text: "Nada Más y Nada Menos", value: "Nada Más y Nada Menos"},
		{ text: "Nativos Mutantes", value: "Nativos Mutantes"},
		{ text: "Naub", value: "Naub"},
		{ text: "Non Bis", value: "Non Bis"},
		{ text: "Notargiano Tavella Parrilla Trío", value: "Notargiano Tavella Parrilla Trío"},
		{ text: "Órco", value: "Órco"},
		{ text: "Parzival", value: "Parzival"},
		{ text: "QunQay", value: "QunQay"},
		{ text: "Río loco", value: "Río loco"},
		{ text: "Santa fe Jazz Ensamble Junior", value: "Santa fe Jazz Ensamble Junior"},
		{ text: "Santa Karma", value: "Santa Karma"},
		{ text: "Sine Die", value: "Sine Die"},
		{ text: "Skamas", value: "Skamas"},
		{ text: "Subliminal", value: "Subliminal"},
		{ text: "Tabula Rasa", value: "Tabula Rasa"},
		{ text: "Tembleque", value: "Tembleque"},
		{ text: "The experience", value: "The experience"},
		{ text: "Trío Tres Hileras", value: "Trío Tres Hileras"}, 
		{ text: "Último trago", value: "Último trago"},
		{ text: "Vaso Exquisito", value: "Vaso Exquisito"},
		{ text: "Vaya Paradoja!", value: "Vaya Paradoja!"},
		{ text: "Zen Sessions", value: "Zen Sessions"}
	];

	$scope.serverSideChange = function(item) {
		if(item.value!=null)
		{
		var votMusica = item.value;
		var confirmPopup = $ionicPopup.confirm({
			title: 'Confirmar Ingreso',
			template: 'Esta conforme con su voto?'
		});
			confirmPopup.then(function(res) {
			if(res) {
				window.plugins.toast.showLongBottom("Gracias por su voto!");
				window.localStorage.setItem("musica", votMusica);
				$state.go('menu.vAV');
			}
			else
			{
				item.value.
				window.plugins.toast.showLongBottom("Voto Cancelado");
			}
		  
			})
  		} else
		  {
			  $ionicPopup.alert({
					title: 'Por favor..',
					template: 'Categoria B no es un grupo, por favor seleccione otro'
				});
		  }
	};
})
