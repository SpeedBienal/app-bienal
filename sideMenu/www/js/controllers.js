angular.module('app.controllers', [])

  //codigo feo por que nos pagaron poco por mucho xD
.controller('inicioCtrl', function($scope,$ionicModal) {
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
<<<<<<< HEAD
        navigator.notification.confirm("Usted va a votar por este artista/obra", "Confirme Voto", ['OK', 'Cancel']);
      var btnIndex = buttonIndex;
      if(btnIndex == 1)
      {
          window.plugins.toast.showLongBottom("Voto Registrado Con Exito!")
      }
=======
        confirm("Usted va a votar por este artista/obra\n"
        +"esta seguro?");
>>>>>>> parent of 3e08ee6... pantalla popup para agregar evento a calendario
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
<<<<<<< HEAD

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };
})

.controller('musicaCtrl', function($scope, $ionicModal, $ionicPopup) {
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

=======

>>>>>>> parent of 3e08ee6... pantalla popup para agregar evento a calendario
    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };
<<<<<<< HEAD

    $scope.createCalendarEvent = function(index, buttonIndex) {
        var options = {
        //message: 'share this', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Seleccione una Red Social' // Android only, you can override the default share sheet title
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
=======
})
>>>>>>> parent of 3e08ee6... pantalla popup para agregar evento a calendario

            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

            //var r = navigator.notification.confirm("Compartir por Facebook?");
            //if(r)
            //{
                //window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, 'http://pfprogramacion.com', function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
            //}
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

<<<<<<< HEAD
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
        //message: 'share this', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Seleccione una Red Social' // Android only, you can override the default share sheet title
        }
=======
})
      
.controller('letrasCtrl', function($scope) {
>>>>>>> parent of 3e08ee6... pantalla popup para agregar evento a calendario

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

            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

            //var r = navigator.notification.confirm("Compartir por Facebook?");
            //if(r)
            //{
                //window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, 'http://pfprogramacion.com', function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
            //}
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
        //message: 'share this', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Seleccione una Red Social' // Android only, you can override the default share sheet title
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

            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

            //var r = navigator.notification.confirm("Compartir por Facebook?");
            //if(r)
            //{
                //window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, 'http://pfprogramacion.com', function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
            //}
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
        //message: 'share this', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Seleccione una Red Social' // Android only, you can override the default share sheet title
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

            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

            //var r = navigator.notification.confirm("Compartir por Facebook?");
            //if(r)
            //{
                //window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, 'http://pfprogramacion.com', function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
            //}
        }
    finally
    {
    };
};
})
   
.controller('escenicasCtrl', function($scope, $ionicModal) {
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
        //message: 'share this', // not supported on some apps (Facebook, Instagram)
        //subject: 'the subject', // fi. for email
        //files: ['', ''], // an array of filenames either locally or remotely
        url: 'http://pfprogramacion.com',
        chooserTitle: 'Seleccione una Red Social' // Android only, you can override the default share sheet title
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

            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

            //var r = navigator.notification.confirm("Compartir por Facebook?");
            //if(r)
            //{
                //window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, 'http://pfprogramacion.com', function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
            //}
        }
    finally
    {
    };
};
})
