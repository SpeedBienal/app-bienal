angular.module('app.controllers', [])

  //codigo feo por que nos pagaron poco por mucho xD
.controller('inicioCtrl', function($scope,$ionicModal,$ionicPopup) {
})


.controller('transmisionCtrl', function($scope,$ionicModal) {
    
})

.controller('musicaCtrl', function($scope, $ionicModal, $ionicPopup) {

    $scope.createCalendarEvent = function(index, buttonIndex) {
        var options = {
        message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Compartir el evento en una Red Social' // Android only, you can override the default share sheet title
        }

        var onSuccess = function(result) {
            window.plugins.toast.showLongBottom("Compartido con éxito!");
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
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
        });
            confirmPopup.then(function(res) {
            if(res) {
                window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
            }
            else{

            }

        });
        }
    finally
    {
    };
};
})
   
.controller('audioVisualesCtrl', function($scope, $ionicModal) {
    $scope.allImages = [{
        'src' : 'img/pic1.jpg'
    }, {
        'src' : 'img/pic2.jpg'
    }, {
        'src' : 'img/pic3.jpg'
    }];
    
    $scope.aImages = [{
        'src' : 'img/imagen-pantalla1.png'
    }, {
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        navigator.notification.confirm("Usted va a votar por este artista/obra", "Confirme Voto", ['OK', 'Cancel']);
      var btnIndex = buttonIndex;
      switch(btnIndex)
      {
          case 1:
          window.plugins.toast.showLongBottom("Voto Registrado Con Exito!");
          break
          case 2:
          window.plugins.toast.showLongBottom("Voto Cancelado");
          break
          default:
          console.log("nada");
      }
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

   $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };

    $scope.createCalendarEvent = function(index, buttonIndex) {
        var options = {
        message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Compartir el evento en una Red Social' // Android only, you can override the default share sheet title
        }

        var onSuccess = function(result) {
            window.plugins.toast.showLongBottom("Compartido con éxito!");
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
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
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
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
        });
            confirmPopup.then(function(res) {
            if(res) {
                window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
            }
            else{

            }

        });
        }
    finally
    {
    };
};
})

   
.controller('letrasCtrl', function($scope, $ionicModal) {
    $scope.allImages = [{
        'src' : 'img/pic1.jpg'
    }, {
        'src' : 'img/pic2.jpg'
    }, {
        'src' : 'img/pic3.jpg'
    }];
    
    $scope.aImages = [{
        'src' : 'img/imagen-pantalla1.png'
    }, {
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        navigator.notification.confirm("Usted va a votar por este artista/obra", "Confirme Voto", ['OK', 'Cancel']);
      var btnIndex = buttonIndex;
      switch(btnIndex)
      {
          case 1:
          window.plugins.toast.showLongBottom("Voto Registrado Con Exito!");
          break
          case 2:
          window.plugins.toast.showLongBottom("Voto Cancelado");
          break
          default:
          console.log("nada");
      }
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

   $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };

    $scope.createCalendarEvent = function(index, buttonIndex) {
        var options = {
        message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Compartir el evento en una Red Social' // Android only, you can override the default share sheet title
        }

        var onSuccess = function(result) {
            window.plugins.toast.showLongBottom("Compartido con éxito!");
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
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
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
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
        });
            confirmPopup.then(function(res) {
            if(res) {
                window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
            }
            else{

            }

        });
        }
    finally
    {
    };
};
})


.controller('visualesCtrl', function($scope, $ionicModal) {
    $scope.allImages = [{
        'src' : 'img/pic1.jpg'
    }, {
        'src' : 'img/pic2.jpg'
    }, {
        'src' : 'img/pic3.jpg'
    }];
    
    $scope.aImages = [{
        'src' : 'img/imagen-pantalla1.png'
    }, {
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        navigator.notification.confirm("Usted va a votar por este artista/obra", "Confirme Voto", ['OK', 'Cancel']);
      var btnIndex = buttonIndex;
      switch(btnIndex)
      {
          case 1:
          window.plugins.toast.showLongBottom("Voto Registrado Con Exito!");
          break
          case 2:
          window.plugins.toast.showLongBottom("Voto Cancelado");
          break
          default:
          console.log("nada");
      }
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

   $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };

    $scope.createCalendarEvent = function(index, buttonIndex) {
        var options = {
        message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Compartir el evento en una Red Social' // Android only, you can override the default share sheet title
        }

        var onSuccess = function(result) {
            window.plugins.toast.showLongBottom("Compartido con éxito!");
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
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
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
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
        });
            confirmPopup.then(function(res) {
            if(res) {
                window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
            }
            else{

            }

        });
        }
    finally
    {
    };
};
})

   
.controller('escenicasCtrl', function($scope, $ionicModal, $ionicPopup) {
   $scope.allImages = [{
        'src' : 'img/pic1.jpg'
    }, {
        'src' : 'img/pic2.jpg'
    }, {
        'src' : 'img/pic3.jpg'
    }];
    
    $scope.aImages = [{
        'src' : 'img/imagen-pantalla1.png'
    }, {
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        navigator.notification.confirm("Usted va a votar por este artista/obra", "Confirme Voto", ['OK', 'Cancel']);
      var btnIndex = buttonIndex;
      switch(btnIndex)
      {
          case 1:
          window.plugins.toast.showLongBottom("Voto Registrado Con Exito!");
          break
          case 2:
          window.plugins.toast.showLongBottom("Voto Cancelado");
          break
          default:
          console.log("nada");
      }
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

   $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };

    $scope.createCalendarEvent = function(index, buttonIndex) {
        var options = {
        message: 'Voy a asistir a la 12° Bienal de Arte Joven de la UNL', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Compartir el evento en una Red Social' // Android only, you can override the default share sheet title
        }

        var onSuccess = function(result) {
            window.plugins.toast.showLongBottom("Compartido con éxito!");
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
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
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
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
        });
            confirmPopup.then(function(res) {
            if(res) {
                window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
            }
            else{

            }

        });
        }
    finally
    {
    };
};
})

.controller('votoCtrl', function($scope, $ionicModal, $ionicPopup, $state) {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(device.cordova);
        var string = device.uuid;

        console.log(string);
    }
    
    $scope.testClick = function () {
        var NombreP = document.myform.Nombre.value;
        var ApellidoP = document.myform.Apellido.value;
        var DniP = document.myform.DNI.value;
        var EmailP = document.myform.Email.value;
        $window.location.href = '/templates/vMusica.html';

        if(!window.localStorage.getItem("votado"))
        {
         var confirmPopup = $ionicPopup.confirm({
            title: 'Confirmar Ingreso',
            template: 'Esta seguro que los datos son correctos?'
        });
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
                
            }
            else
            {
                window.plugins.toast.showLongBottom("Voto Cancelado");
            }
          
            })
            }else{
                window.plugins.toast.showLongBottom("Usted ya ha votado ");
        };
    };
})

.controller('vMusicaCtrl', function($scope, $ionicModal, $ionicPopup) {

    $scope.votoClick = function () {
        var votMusica = document.Musica.value;

         var confirmPopup = $ionicPopup.confirm({
            title: 'Confirmar Ingreso',
            template: 'Esta seguro que los datos son correctos?'
        });
            confirmPopup.then(function(res) {
            if(res) {
                window.plugins.toast.showLongBottom("Gracias por su voto!");
                window.localStorage.setItem("musica", votMusica);
                window.location.href = "/templates/vMusica.html";
            }
            else
            {
                window.localStorage.removeItem("musica");
                window.plugins.toast.showLongBottom("Voto Cancelado");
            }
          
            })
        };
})
