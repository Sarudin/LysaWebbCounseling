angular.module('lysaSite').service('clientsService', function($http) {
  this.getAllClients = () => {
    return $http.get('/clients/all').then((response) => {
      return response;
    })
  };

  this.createNewClient = (data) => {
    return $http.post('/clients/addNew', data).then((response) => {
      return response.status;
    })
  };

  this.viewClient = (data) => {
    return $http.post('/clients/one', data).then((response) => {
      if (response.status === 200) {
        console.log("Found client.");
        return response;
      }
    })
  };

  this.editClient = (data) => {
    return $http.post('/clients/edit', data).then((response) => {
      if (response.status === 200) {
        console.log("Client updated.");
        return response;
      }
    })
  };

  this.deleteClient = (data) => {
    return $http.post('/clients/deleteone', data).then((response) => {
      if (response.status === 201) {
        return response.status;
      }
      else {
        if (response.status === 200) {
          console.log("Found client.");
          return response;
        }
        else {
          return undefined;
        }
      }
    })
  }

  this.login = (data) => {
    return $http.post('/clients/login', data).then((response) => {
      if (response.status === 200) {
        return response;
      }
    })
  }
})
