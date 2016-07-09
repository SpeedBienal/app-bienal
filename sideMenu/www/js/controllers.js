angular.module('app.controllers', [])
  
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
		confirm("Usted va a votar por este artista/obra\n"
		+"esta seguro?");
	};


	$scope.createEvent = function($cordovaCalendar){
		$cordovaCalendar.createEvent({
            title: 'Space Race',
            location: 'The Moon',
            notes: 'Bring sandwiches',
            startDate: new Date(2015, 0, 15, 18, 30, 0, 0, 0),
            endDate: new Date(2015, 1, 17, 12, 0, 0, 0, 0)
        }).then(function (result) {
            alert("Event created successfully");
        }, function (err) {
            alert("There was an error: " + err);
        });
	};
	
	$scope.showImages = function(index) {
		$scope.activeSlide = index;
		$scope.showModal('templates/image-popover.html');
	};
	
	$scope.showEvent = function(index) {
		$scope.activeSlide = index;
		$scope.showModal('templates/event-popover.html');
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
})

.controller('MainCtrl', function($scope, Events) {
    
    Events.get().then(function(events) {
        console.log("events", events);  
        $scope.events = events;
    })
})

.controller('musicaCtrl', function($scope) {

})
   
.controller('audioVisualesCtrl', function($scope) {

})
	  
.controller('letrasCtrl', function($scope) {

})
   
.controller('visualesCtrl', function($scope) {

})
   
.controller('escenicasCtrl', function($scope) {

})