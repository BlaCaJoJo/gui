;(function(){
  angular.module('Stack-Undertow', [ ])
      .run(function($http, $rootScope){

        $http.get('../questions.json')
          .then(function (response){
            $rootScope.questions = response.data;
          });

      })
})(); //END IIFE
