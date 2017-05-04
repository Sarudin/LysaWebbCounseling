angular.module('lysaSite').directive('picturePageDir', () => {
    return {
        restrict: 'E',
        templateUrl: './templates/picturePageTmpl.html',
        controller: ($scope) => {
            let images = [];

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

            let i = 0;

            $scope.showNext = () => {
                if (i < images.length - 1) {
                    i = i + 1;
                    document.getElementById("lpic").innerHTML = images[i];
                }
            }

            $scope.showPrevious = () => {
                if (i > 0) {
                    i = i - 1;
                    document.getElementById("lpic").innerHTML = "" + images[i];
                }
            }

            $scope.showFirst = () => {
                i = 0;
                document.getElementById("lpic").innerHTML = "" + images[i];
            }
        }
    }
})
