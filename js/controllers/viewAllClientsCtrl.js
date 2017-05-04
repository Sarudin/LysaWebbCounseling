angular.module('lysaSite').controller('viewAllClientsCtrl', ($scope, clientsService) => {
  $scope.clients = [];

  clientsService.getAllClients().then((response) => {
    $scope.clients = response.data;
  });
})
