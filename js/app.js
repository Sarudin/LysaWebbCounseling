angular.module('lysaSite', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/homeTmpl.html'
    })
    .state('contactByPhone', {
      url: '/contactByPhone',
      templateUrl: './templates/contactByPhoneTmpl.html'
    })
    .state('contactByEmail', {
      url: '/contactByEmail',
      templateUrl: './templates/contactByEmailTmpl.html'
    })
    .state('directions', {
      url: '/directions',
      templateUrl: './templates/directionsTmpl.html'
    })
    .state('picturePage', {
      url: '/picturePage',
      templateUrl: './templates/picturePage.html'
    })
    .state('aboutMe', {
      url: '/aboutMe',
      templateUrl: './templates/aboutMeTmpl.html'
    })
    .state('adminLogin', {
      url: '/adminLogin',
      templateUrl: './templates/adminLoginTmpl.html'
    })
    .state('clientsAdminHome', {
      url: '/clientsAdminHome',
      templateUrl: './templates/clients/clientsHomeTmpl.html'
    })
    .state('viewAllClients', {
      url: '/viewAllClients',
      templateUrl: './templates/clients/viewAllClients.html',
      controller: 'viewAllClientsCtrl'
    })
    .state('createNewClient', {
      url: '/createNewClient',
      templateUrl: './templates/clients/createClientTmpl.html',
      controller: 'createClientCtrl'
    })

  $urlRouterProvider.otherwise('/');
})
