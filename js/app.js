angular.module('lysaSite', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/homeTmpl.html'
    })
    .state('contactByPhone', {
      url: '/contactByPhone',
      templateUrl: './templates/contactByPhone.html'
    })
    .state('contactByEmail', {
      url: '/contactByEmail',
      templateUrl: './templates/contactByEmail.html'
    })
    .state('directions', {
      url: '/directions',
      templateUrl: './templates/directions.html'
    })
    .state('picturePage', {
      url: '/picturePage',
      templateUrl: './templates/picturePage.html',
      controller: 'pictureCtrl'
    })
    .state('aboutMe', {
      url: '/aboutMe',
      templateUrl: './templates/aboutMe.html'
    })

  $urlRouterProvider.otherwise('/');
})
