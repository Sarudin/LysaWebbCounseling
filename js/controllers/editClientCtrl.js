angular.module('lysaSite').controller('viewClientCtrl', ($scope, clientsService) => {
  $scope.client = [];
  $scope.showDiv = false;

  $scope.submitName = function() {
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
  };

  clientsService.viewClient(data).then((response) => {
    console.log(response);
    if (response.status === 200) {
      console.log("Client returned successfully.");
      $scope.client = response.data;
    }
  });
})
