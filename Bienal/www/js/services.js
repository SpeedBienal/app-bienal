angular.module('app.services', [])

 .factory('personasService', personas_);

  function personas_($http) {
    return {
      cotejar_datos_de_persona: function ( nombre, apellido, email, dni, uuid ) {
        var obj = {nombre: nombre, apellido: apellido, email: email, dni: dni, uuid: uuid};
        return $http
          .post('http://bienal.unl.edu.ar/api/v1/personas/buscar/', obj);
      },
      enviar_voto: function ( obj ) {
        return $http.post('http://bienal.unl.edu.ar/api/v1/personas/', obj );
      }
    }
  }
