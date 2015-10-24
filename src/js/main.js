
// js for the index page
;(function(){

  angular.module('Stack-Undertow', [ ])
    .run(function($http, $rootScope){
      // $http.get('https://blacajojo.herokuapp.com/questions')
      $http.get('../questions.json')
        .then(function (response){
          console.log(arguments);
          $rootScope.questions = response.data;
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
