angular.module('lysaSite', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/homeTmpl.html',
      controller: 'mainCtrl'
    })

  $urlRouterProvider.otherwise('/');
})
