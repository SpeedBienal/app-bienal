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
    
    $scope.campoVacio = function () {
        if (document.myform.Nombre.value =="")
            document.getElementById("Nombre").style.backgroundColor = red;
    }

    $scope.testClick = function () {
        var NombreP = document.myform.Nombre.value;
        var ApellidoP = document.myform.Apellido.value;
        var DniP = document.myform.DNI.value;
        var EmailP = document.myform.Email.value;
        if(NombreP == "" || ApellidoP == "" || DniP == "" || EmailP == "")
        {
            var alertPopup = $ionicPopup.alert ({
                title: 'Complete todos los campos',
                template: 'Complete todos los campos por favor' 
            })
        }
        else
        {
            if(!window.localStorage.getItem("votado"))
            {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Confirmar Ingreso',
                template: 'Esta seguro que los datos son correctos?'
            })
                confirmPopup.then(function(res) {
                if(res) {
                    window.plugins.toast.showLongBottom("Bienvenido para votar!");
                    votado = true;
                    window.localStorage.setItem("NombreP", NombreP);
                    window.localStorage.setItem("ApellidoP", ApellidoP);
                    window.localStorage.setItem("DniP", DniP);
                    window.localStorage.setItem("EmailP", EmailP);
                    window.localStorage.setItem("uuid", device.uuid);
                    window.localStorage.setItem("votado", votado);
                    $state.go('menu.vMusica');
                }
                else
                {
                    window.plugins.toast.showLongBottom("Voto Cancelado");
                }
            
                })
                }else{
                    window.plugins.toast.showLongBottom("Usted ya ha votado ");
            }
        }
    }
})

.controller('vMusicaCtrl', function($scope, $ionicModal, $ionicPopup) {

    $scope.votoClick = function (item) {
        var votMusica = item.value;
        window.console.log(votMusica);
         var confirmPopup = $ionicPopup.confirm({
            title: 'Confirmar Ingreso',
            template: 'Esta conforme con su voto?'
        });
            confirmPopup.then(function(res) {
            if(res) {
                window.plugins.toast.showLongBottom("Gracias por su voto!");
                window.localStorage.setItem("musica", votMusica);
                
            }
            else
            {
                window.localStorage.removeItem("musica");
                window.plugins.toast.showLongBottom("Voto Cancelado");
            }
          
            })
        };
})
