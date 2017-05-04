angular.module('lysaSite').controller('viewClientCtrl', ($scope, clientsService) => {
  $scope.client = {};

  $scope.submit = function() {
    let data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    }

    clientsService.viewClient(data).then((response) => {
      if (response.status === 200) {
        console.log("Client returned successfully.");
        $scope.client = response.data;
      }
      else {
        console.log("There was a problem.");
      }
    })
  }
})
