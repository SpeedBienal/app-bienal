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

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});