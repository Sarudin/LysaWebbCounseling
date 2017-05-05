angular.module('lysaSite').controller('viewClientCtrl', ($scope, clientsService) => {
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
  }
})
