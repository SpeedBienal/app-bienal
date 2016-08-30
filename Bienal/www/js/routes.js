angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
      .state('menu.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.musica', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/musica.html',
        controller: 'musicaCtrl'
      }
    }
  })

  .state('menu.audioVisuales', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/audioVisuales.html',
        controller: 'audioVisualesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.letras', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/letras.html',
        controller: 'letrasCtrl'
      }
    }
  })

  .state('menu.visuales', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/visuales.html',
        controller: 'visualesCtrl'
      }
    }
  })

  .state('menu.escenicas', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/escenicas.html',
        controller: 'escenicasCtrl'
      }
    }
  })

  .state('menu.youtube', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/transmision.html',
        controller: 'transmisionCtrl'
      }
    }
  })

    .state('menu.votos', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/votacion.html',
        controller: 'votoCtrl'
      }
    }
  })
  
  .state('menu.vMusica', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vMusica.html',
        controller: 'vMusicaCtrl'
      }
    }
  })

 .state('menu.vAV', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vAV.html',
        controller: 'vAVCtrl'
      }
    }
  })
  .state('menu.vLetras', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vLetras.html',
        controller: 'vLetrasCtrl'
      }
    }
  })
  .state('menu.vVisuales', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vVisuales.html',
        controller: 'vVisualesCtrl'
      }
    }
  })
  .state('menu.vEscenicas', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vEscenicas.html',
        controller: 'vEscenicasCtrl'
      }
    }
  })
  .state('menu.cielorazzo', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cielorrazzo.html',
        controller: 'inicioCtrl'
      }
    }
  })
  .state('menu.parteplaneta', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/parteplaneta.html',
        controller: 'inicioCtrl'
      }
    }
  })
  .state('menu.virtmia', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/virtmia.html',
        controller: 'inicioCtrl'
      }
    }
  })
  .state('menu.bienal', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bienal.html',
        controller: 'inicioCtrl'
      }
    }
  })
  .state('menu.vAgradece', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vAgradece.html',
        controller: 'votacionCtrl'
      }
    }
  })
  .state('menu.creditos', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/creditos.html',
        controller: 'inicioCtrl'
      }
    }
  })
  .state('menu.staff', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/staff.html',
        controller: 'inicioCtrl'
      }
    }
  })
$urlRouterProvider.otherwise('/side-menu21/page1')

  

});