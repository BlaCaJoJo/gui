// js for the index page
// ;(function(){
//   angular.module('Stack-Undertow', [ ])
//       .run(function($http, $rootScope){
//
//         $http.get('../questions.json')
//           .then(function (response){
//             $rootScope.question = response.data;
//           });
//
//       })
// })(); //END IIFE

;(function(){
  // angular.module('Stack-Undertow', [ ])
  //   .run(function($http, $rootScope){
  //     $http.get('../questions.json')
  //     .then(function (response){
  //       console.log(arguments);
  //     })
  //     });
  angular.module('Stack-Undertow', [ ])
    .run(function($http, $rootScope){
      $http.get('../questions.json')
        .then(function (response){
          console.log(arguments);
          $rootScope.question = response.data[0];
          });
        })
})(); //END IIFE
