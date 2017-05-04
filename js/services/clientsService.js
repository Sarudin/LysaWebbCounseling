angular.module('lysaSite').service('clientsService', function($http) {
  this.getAllClients = () => {
    return $http.get('/clients/all').then(function(response) {
      return response;
    })
  };

  this.createNewClient = (data) => {
    return $http.post('/clients/addNew', data).then(function(response) {
      return response.status;
    })
  }
})
