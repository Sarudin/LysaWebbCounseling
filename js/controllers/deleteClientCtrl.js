angular.module('lysaSite').controller('deleteClientCtrl', ($scope, clientsService) => {
  $scope.deleted = false;
  $scope.namesReq = false;

  $scope.submit = function() {
    let data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    }

    clientsService.deleteClient(data).then((response) => {
      if (response.status === 201) {
        console.log('No client returned!');
        $scope.namesReq = !$scope.namesReq;
      }
      else {
        if (response.status === 200) {
          $scope.deleted = !$scope.deleted;
          console.log("Client deleted successfully.");
        }
      }
    })
  }
})
