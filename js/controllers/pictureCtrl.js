angular.module('lysaSite').controller('pictureCtrl', function($scope) {
  $scope.images = [];

  $scope.images[0] = "<img src='./img/LysaPlayroom.png' class='img-responsive galleryPic' alt='Playroom'>";
  $scope.images[1] = "<img src='./img/LysaStage.png' class='img-responsive galleryPic' alt='Stage'>";
  $scope.images[2] = "<img src='./img/LysaBookshelf.png' class='img-responsive galleryPic' alt='Bookshelf'>";
  $scope.images[3] = "<img src='./img/LysaCarpet.png' class='img-responsive galleryPic' alt='Carpet'>";
  $scope.images[4] = "<img src='./img/LysaChair.png' class='img-responsive galleryPic' alt='Chair'>";
  $scope.images[5] = "<img src='./img/LysaCostumes.png' class='img-responsive galleryPic' alt='Costumes'>";
  $scope.images[6] = "<img src='./img/LysaCouchAndShelf.png' class='img-responsive galleryPic' alt='Couch and Shelf'>";
  $scope.images[7] = "<img src='./img/LysaDarts.png' class='img-responsive galleryPic' alt='Darts'>";
  $scope.images[8] = "<img src='./img/LysaDollhouse.png' class='img-responsive galleryPic' alt='Dollhouse'>";
  $scope.images[9] = "<img src='./img/LysaPuppets.png' class='img-responsive galleryPic' alt='Puppets'>";
  $scope.images[10] = "<img src='./img/LysaOwlCase.png' class='img-responsive galleryPic' alt='Owl Case'>";
  $scope.images[11] = "<img src='./img/LysaOwlFrame.png' class='img-responsive galleryPic' alt='Owl Frame'>";
  $scope.images[12] = "<img src='./img/LysaRacetrack.png' class='img-responsive galleryPic' alt='Racetrack'>";
  $scope.images[13] = "<img src='./img/LysaShelf.png' class='img-responsive galleryPic' alt='Shelf'>";
  $scope.images[14] = "<img src='./img/LysaToyShelf.png' class='img-responsive galleryPic' alt='Toy Shelf'>";
  $scope.images[15] = "<img src='./img/LysaToys2.png' class='img-responsive galleryPic' alt='Toys'>";
  $scope.images[16] = "<img src='./img/LysaTwizzlers.png' class='img-responsive galleryPic' alt='Twizzlers'>";
  $scope.images[17] = "<img src='./img/LysaAnimalPics.png' class='img-responsive galleryPic' alt='Animals'>";
  $scope.images[18] = "<img src='./img/LysaKitchen.png' class='img-responsive galleryPic' alt='Kitchen'>";
  $scope.images[19] = "<img src='./img/LysaCouch.png' class='img-responsive galleryPic' alt='Couch'>";

  $scope.i = 0;

  $scope.showNext = function() {
      if ($scope.i < $scope.images.length - 1)
      {
          $scope.i = $scope.i + 1;
          document.getElementById("lpic").innerHTML = $scope.images[$scope.i];
      }
  }

  $scope.showPrevious = function() {
      if ($scope.i > 0)
      {
          $scope.i = $scope.i - 1;
          document.getElementById("lpic").innerHTML = "" + $scope.images[$scope.i];
      }
  }

  $scope.showFirst = function() {
      $scope.i = 0;
      document.getElementById("lpic").innerHTML = "" + $scope.images[$scope.i];
  }
})
