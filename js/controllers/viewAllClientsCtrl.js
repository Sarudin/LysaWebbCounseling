angular.module('lysaSite').controller('viewAllClientsCtrl', ($scope, clientsService) => {
  $scope.clients = [];

  clientsService.getAllClients().then((response) => {
    $scope.clients = response.data;
  });

  $scope.client = [];
  $scope.showDiv = false;

  $scope.submit = function(client) {

    clientsService.viewClient(client).then((response) => {
      if (response.status === 200) {
          $scope.showDiv = !$scope.showDiv;
          console.log("Client returned successfully.");
          $scope.client = response.data;
      }
    })
  }
})
