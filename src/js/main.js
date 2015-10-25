

;(function(){

angular.module('Stack-Undertow', ['ngRoute'], function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'home.html',

    })

    .when('/question', {
      templateUrl: 'question.html',
    })

    .when('/home', {
      templateUrl: 'home.html',
    })

    .when('/panel-login', {
      templateUrl: 'login.html',
    })

    .when('/panel-signup', {
      templateUrl: 'signup.html',
    });


}) //END .MODULE

  .controller("loginController", function($scope, $http){
    $scope.formvalues= {
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
    };

    $scope.submit= function(){
      $http.post("https://blacajojo.herokuapp.com/members", $scope.formvalues)
      .then(function (response){
        console.log("can you hear me? please god hear me",response);
      });
    };
  })


    // INDEX
    .run(function($http, $rootScope){
      $http.get('https://blacajojo.herokuapp.com/questions')
      // $http.get('../questions.json')
        .then(function (response){
          console.log(arguments);
          $rootScope.questions = response.data;

          });
        })


        // QUESTION SHOW
        .run(function($http, $rootScope){
          $http.get('https://blacajojo.herokuapp.com/questions')
          // $http.get('../questions.json')
            .then(function (response){
              console.log(arguments);
              $rootScope.question = response.data[0];

              });
            })

          // ANSWERS
          .run(function($http, $rootScope){
             $http.get('https://blacajojo.herokuapp.com/answers')
               .then(function (response){
                 console.log(arguments);
                 $rootScope.answers = response.data;
                 });
               });







})(); //END IIFE











// TABS
$('.tabs').each(function(){ //iterates through each ahref
  $('.tab-content').each(function(){ //iterates through the corresponding content

  $('a').on('click', function(event){
    event.preventDefault(); //stop browser to take action for clicked

    var active = $(this).attr('href'); //targets active tab and grabs that href

    $(this).add(active) // if use `this`, remove both each functions
      .addClass('active')
    .siblings()
      .removeClass('active');

    }).filter('[href="#panel-signup"]')
      .trigger('click');

  });
});
