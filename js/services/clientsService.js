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
  };

  this.viewClient = (data) => {
    return $http.post('/clients/one', data).then(function(response) {
      if (response.status === 200) {
        console.log("Found client.");
        return response;
      }
    })
  };

  this.deleteClient = (data) => {
    return $http.post('/clients/deleteone', data).then(function(response) {
      if (response.status === 200) {
        console.log("Found client.");
        return response;
      }
    })
  }
})
