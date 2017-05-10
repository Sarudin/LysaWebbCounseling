angular.module('lysaSite').controller('viewClientCtrl', ($scope, clientsService) => {
  $scope.client = [];
  $scope.showDiv = false;
  $scope.notFound = false;

  $scope.submit = function() {

    let data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    }

    clientsService.viewClient(data).then((response) => {
      console.log(response);
      if (response.status === 200) {
        if (response.data.length === 0) {
          $scope.notFound = true;
        }
        else {
          $scope.notFound = false;
          $scope.showDiv = !$scope.showDiv;
          console.log("Client returned successfully.");
          $scope.client = response.data;
        }
      }
    })
  }
})
