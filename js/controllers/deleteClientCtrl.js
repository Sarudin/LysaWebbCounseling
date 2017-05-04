angular.module('lysaSite').controller('deleteClientCtrl', ($scope, clientsService) => {
  $scope.submit = function() {
    let data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    }
    
    clientsService.deleteClient(data).then((response) => {
      if (response.status === 200) {
        console.log("Client deleted successfully.");
      }
    })
  }
})
