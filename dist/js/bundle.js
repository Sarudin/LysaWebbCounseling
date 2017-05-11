'use strict';

angular.module('lysaSite', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: './templates/homeTmpl.html'
  }).state('contactByPhone', {
    url: '/contactByPhone',
    templateUrl: './templates/contactByPhoneTmpl.html'
  }).state('contactByEmail', {
    url: '/contactByEmail',
    templateUrl: './templates/contactByEmailTmpl.html'
  }).state('directions', {
    url: '/directions',
    templateUrl: './templates/directionsTmpl.html'
  }).state('picturePage', {
    url: '/picturePage',
    templateUrl: './templates/picturePage.html'
  }).state('aboutMe', {
    url: '/aboutMe',
    templateUrl: './templates/aboutMeTmpl.html'
  }).state('adminLogin', {
    url: '/adminLogin',
    templateUrl: './templates/adminLoginTmpl.html',
    controller: 'loginCtrl'
  }).state('clientsAdminHome', {
    url: '/clientsAdminHome',
    templateUrl: './templates/clients/clientsHomeTmpl.html'
  }).state('viewAllClients', {
    url: '/viewAllClients',
    templateUrl: './templates/clients/viewAllClients.html',
    controller: 'viewAllClientsCtrl'
  }).state('viewClient', {
    url: '/viewClient',
    templateUrl: './templates/clients/viewClientTmpl.html',
    controller: 'viewClientCtrl'
  }).state('viewClientInfo', {
    url: '/viewClientInfo',
    templateUrl: './templates/clients/viewClientInfoTmpl.html',
    controller: 'viewClientInfoCtrl'
  }).state('createNewClient', {
    url: '/createNewClient',
    templateUrl: './templates/clients/createClientTmpl.html',
    controller: 'createClientCtrl'
  }).state('editClient', {
    url: '/editClient',
    templateUrl: './templates/clients/editClientTmpl.html',
    controller: 'editClientCtrl'
  }).state('deleteClient', {
    url: '/deleteClient',
    templateUrl: './templates/clients/deleteClientTmpl.html',
    controller: 'deleteClientCtrl'
  });

  $urlRouterProvider.otherwise('/');
}]);
'use strict';

angular.module('lysaSite').controller('createClientCtrl', ["$scope", "clientsService", function ($scope, clientsService) {
  $scope.created = false;
  $scope.notCreated = false;

  $scope.submit = function () {
    var data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName,
      phone: $scope.clientPhone,
      email: $scope.clientEmail
    };

    clientsService.createNewClient(data).then(function (response) {
      if (response === 200) {
        $scope.created = true;
        console.log("Client created successfully.");
      } else {
        $scope.notCreated = true;
        console.log("Client creation failure.");
      }
    });
  };
}]);
'use strict';

angular.module('lysaSite').controller('deleteClientCtrl', ["$scope", "clientsService", function ($scope, clientsService) {
  $scope.deleted = false;

  $scope.submit = function () {
    var data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    };

    clientsService.deleteClient(data).then(function (response) {
      if (response.status === 200) {
        $scope.deleted = !$scope.deleted;
        console.log("Client deleted successfully.");
      }
    });
  };
}]);
'use strict';

angular.module('lysaSite').controller('editClientCtrl', ["$scope", "clientsService", function ($scope, clientsService) {
  $scope.client = [];
  $scope.showDiv = false;
  $scope.notFound = false;

  $scope.submit = function () {

    var data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    };

    clientsService.viewClient(data).then(function (response) {
      if (response.status === 200) {
        if (response.data.length === 0) {
          $scope.notFound = true;
        } else {
          $scope.notFound = false;
          $scope.showDiv = !$scope.showDiv;
          console.log("Client returned successfully.");
          $scope.client = response.data[0];
        }
      }
    });
  };

  $scope.submitInfo = function (user) {
    clientsService.editClient(user).then(function (response) {
      if (response.status === 200) {
        console.log("Client returned successfully.");
        $scope.client = response.data;
      }
    });
  };
}]);
'use strict';

angular.module('lysaSite').controller('loginCtrl', ["$scope", "clientsService", "$state", function ($scope, clientsService, $state) {
  $scope.showErr = false;

  $scope.login = function (user) {
    clientsService.login(user).then(function (response) {
      if (response.status === 200) {
        $state.go('clientsAdminHome');
        return response;
      } else {
        $scope.showErr = true;
      }
    });
  };
}]);
'use strict';

angular.module('lysaSite').controller('viewAllClientsCtrl', ["$scope", "clientsService", function ($scope, clientsService) {
  $scope.clients = [];

  clientsService.getAllClients().then(function (response) {
    $scope.clients = response.data;
  });

  $scope.client = [];
  $scope.showDiv = false;

  $scope.submit = function (client) {

    clientsService.viewClient(client).then(function (response) {
      if (response.status === 200) {
        $scope.showDiv = !$scope.showDiv;
        console.log("Client returned successfully.");
        $scope.client = response.data;
      }
    });
  };
}]);
'use strict';

angular.module('lysaSite').controller('viewClientCtrl', ["$scope", "clientsService", function ($scope, clientsService) {
  $scope.client = [];
  $scope.showDiv = false;
  $scope.notFound = false;

  $scope.submit = function () {

    var data = {
      firstName: $scope.clientFirstName,
      lastName: $scope.clientLastName
    };

    clientsService.viewClient(data).then(function (response) {
      console.log(response);
      if (response.status === 200) {
        if (response.data.length === 0) {
          $scope.notFound = true;
        } else {
          $scope.notFound = false;
          $scope.showDiv = !$scope.showDiv;
          console.log("Client returned successfully.");
          $scope.client = response.data;
        }
      }
    });
  };
}]);
'use strict';

angular.module('lysaSite').directive('picturePageDir', function () {
    return {
        restrict: 'E',
        templateUrl: './templates/picturePageTmpl.html',
        controller: ["$scope", function controller($scope) {
            var images = [];

            images[0] = "<img src='./img/LysaPlayroom.png' class='img-responsive galleryPic' alt='Playroom'>";
            images[1] = "<img src='./img/LysaStage.png' class='img-responsive galleryPic' alt='Stage'>";
            images[2] = "<img src='./img/LysaBookshelf.png' class='img-responsive galleryPic' alt='Bookshelf'>";
            images[3] = "<img src='./img/LysaCarpet.png' class='img-responsive galleryPic' alt='Carpet'>";
            images[4] = "<img src='./img/LysaChair.png' class='img-responsive galleryPic' alt='Chair'>";
            images[5] = "<img src='./img/LysaCostumes.png' class='img-responsive galleryPic' alt='Costumes'>";
            images[6] = "<img src='./img/LysaCouchAndShelf.png' class='img-responsive galleryPic' alt='Couch and Shelf'>";
            images[7] = "<img src='./img/LysaDarts.png' class='img-responsive galleryPic' alt='Darts'>";
            images[8] = "<img src='./img/LysaDollhouse.png' class='img-responsive galleryPic' alt='Dollhouse'>";
            images[9] = "<img src='./img/LysaPuppets.png' class='img-responsive galleryPic' alt='Puppets'>";
            images[10] = "<img src='./img/LysaOwlCase.png' class='img-responsive galleryPic' alt='Owl Case'>";
            images[11] = "<img src='./img/LysaOwlFrame.png' class='img-responsive galleryPic' alt='Owl Frame'>";
            images[12] = "<img src='./img/LysaRacetrack.png' class='img-responsive galleryPic' alt='Racetrack'>";
            images[13] = "<img src='./img/LysaShelf.png' class='img-responsive galleryPic' alt='Shelf'>";
            images[14] = "<img src='./img/LysaToyShelf.png' class='img-responsive galleryPic' alt='Toy Shelf'>";
            images[15] = "<img src='./img/LysaToys2.png' class='img-responsive galleryPic' alt='Toys'>";
            images[16] = "<img src='./img/LysaTwizzlers.png' class='img-responsive galleryPic' alt='Twizzlers'>";
            images[17] = "<img src='./img/LysaAnimalPics.png' class='img-responsive galleryPic' alt='Animals'>";
            images[18] = "<img src='./img/LysaKitchen.png' class='img-responsive galleryPic' alt='Kitchen'>";
            images[19] = "<img src='./img/LysaCouch.png' class='img-responsive galleryPic' alt='Couch'>";

            var i = 0;

            $scope.showNext = function () {
                if (i < images.length - 1) {
                    i = i + 1;
                    document.getElementById("lpic").innerHTML = images[i];
                }
            };

            $scope.showPrevious = function () {
                if (i > 0) {
                    i = i - 1;
                    document.getElementById("lpic").innerHTML = "" + images[i];
                }
            };

            $scope.showFirst = function () {
                i = 0;
                document.getElementById("lpic").innerHTML = "" + images[i];
            };
        }]
    };
});
'use strict';

angular.module('lysaSite').service('clientsService', ["$http", function ($http) {
  this.getAllClients = function () {
    return $http.get('/clients/all').then(function (response) {
      return response;
    });
  };

  this.createNewClient = function (data) {
    return $http.post('/clients/addNew', data).then(function (response) {
      return response.status;
    });
  };

  this.viewClient = function (data) {
    return $http.post('/clients/one', data).then(function (response) {
      if (response.status === 200) {
        console.log("Found client.");
        return response;
      }
    });
  };

  this.editClient = function (data) {
    return $http.post('/clients/edit', data).then(function (response) {
      if (response.status === 200) {
        console.log("Client updated.");
        return response;
      }
    });
  };

  this.deleteClient = function (data) {
    return $http.post('/clients/deleteone', data).then(function (response) {
      if (response.status === 200) {
        console.log("Found client.");
        return response;
      } else {
        return undefined;
      }
    });
  };

  this.login = function (data) {
    return $http.post('/clients/login', data).then(function (response) {
      if (response.status === 200) {
        return response;
      }
    });
  };
}]);
//# sourceMappingURL=bundle.js.map
