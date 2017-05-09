angular.module('lysaSite').controller('editClientCtrl', function($scope, clientsService) {
  $scope.client = [];
  $scope.showDiv = false;

  $scope.submit = function() {
    $scope.showDiv = !$scope.showDiv;

    let data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    }

    clientsService.viewClient(data).then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log("Client returned successfully.");
        $scope.client = response.data;
      }
    })
  };

  $scope.submitInfo = function() {
    let clientData = {
      firstName: $scope.clientInfoFirstName,
      lastName: $scope.clientInfoLastName,
      phone: $scope.clientInfoPhone,
      email: $scope.clientInfoEmail
    }

    clientsService.viewClient(clientData).then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log("Client returned successfully.");
        $scope.client = response.data;
      }
    });
  }
})
