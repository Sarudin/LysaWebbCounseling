angular.module('lysaSite').controller('loginCtrl', ($scope, clientsService, $state) => {
  $scope.showErr = false;

  $scope.login = (user) => {
    clientsService.login(user).then((response) => {
      if (response.status === 200) {
        $state.go('clientsAdminHome');
        return response;
      }
      else {
        $scope.showErr = true;
      }
    })
  }
})
