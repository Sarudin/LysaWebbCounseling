angular.module('lysaSite').controller('createClientCtrl', ($scope, clientsService) => {

  $scope.submit = function() {
    let data = {
        firstName: $scope.clientFirstName,
        lastName: $scope.clientLastName,
        phone: $scope.clientPhone,
        email: $scope.clientEmail
      }

      clientsService.createNewClient(data).then((response) => {
        if (response === 200) {
          console.log("Client created successfully.");
        }
      });
    }
  })
