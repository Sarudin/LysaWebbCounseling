angular.module('lysaSite').controller('createClientCtrl', ($scope, clientsService) => {
  $scope.created = false;
  $scope.notCreated = false;

  $scope.submit = function() {
    let data = {
        firstName: $scope.clientFirstName,
        lastName: $scope.clientLastName,
        phone: $scope.clientPhone,
        email: $scope.clientEmail
      }

      clientsService.createNewClient(data).then((response) => {
        if (response === 200) {
          $scope.created = true;
          console.log("Client created successfully.");
        }
        else {
          $scope.notCreated = true;
          console.log("Client creation failure.");
        }
      });
    }
  })
