angular.module('lysaSite').controller('editClientCtrl', function($scope, clientsService) {
  $scope.client = [];
  $scope.showDiv = false;
  $scope.notFound = false;

  $scope.submit = function() {

    let data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    }

    clientsService.viewClient(data).then((response) => {
      if (response.status === 200) {
        if (response.data.length === 0) {
          $scope.notFound = true;
        }
        else {
          $scope.notFound = false;
          $scope.showDiv = !$scope.showDiv;
          console.log("Client returned successfully.");
          $scope.client = response.data[0];
        }
      }
    })
  };

  $scope.submitInfo = function(user) {
    clientsService.editClient(user).then((response) => {
      if (response.status === 200) {
        console.log("Client returned successfully.");
        $scope.client = response.data;
      }
    });
  }
})
