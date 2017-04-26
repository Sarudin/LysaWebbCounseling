var images = new Array();

images[0] = "<img src='LysaSitePics/LysaPlayroom.png' class='img-responsive galleryPic' alt='Playroom'>";
images[1] = "<img src='LysaSitePics/LysaStage.png' class='img-responsive galleryPic' alt='Stage'>";
images[2] = "<img src='LysaSitePics/LysaBookshelf.png' class='img-responsive galleryPic' alt='Bookshelf'>";
images[3] = "<img src='LysaSitePics/LysaCarpet.png' class='img-responsive galleryPic' alt='Carpet'>";
images[4] = "<img src='LysaSitePics/LysaChair.png' class='img-responsive galleryPic' alt='Chair'>";
images[5] = "<img src='LysaSitePics/LysaCostumes.png' class='img-responsive galleryPic' alt='Costumes'>";
images[6] = "<img src='LysaSitePics/LysaCouchAndShelf.png' class='img-responsive galleryPic' alt='Couch and Shelf'>";
images[7] = "<img src='LysaSitePics/LysaDarts.png' class='img-responsive galleryPic' alt='Darts'>";
images[8] = "<img src='LysaSitePics/LysaDollhouse.png' class='img-responsive galleryPic' alt='Dollhouse'>";
images[9] = "<img src='LysaSitePics/LysaPuppets.png' class='img-responsive galleryPic' alt='Puppets'>";
images[10] = "<img src='LysaSitePics/LysaOwlCase.png' class='img-responsive galleryPic' alt='Owl Case'>";
images[11] = "<img src='LysaSitePics/LysaOwlFrame.png' class='img-responsive galleryPic' alt='Owl Frame'>";
images[12] = "<img src='LysaSitePics/LysaRacetrack.png' class='img-responsive galleryPic' alt='Racetrack'>";
images[13] = "<img src='LysaSitePics/LysaShelf.png' class='img-responsive galleryPic' alt='Shelf'>";
images[14] = "<img src='LysaSitePics/LysaToyShelf.png' class='img-responsive galleryPic' alt='Toy Shelf'>";
images[15] = "<img src='LysaSitePics/LysaToys2.png' class='img-responsive galleryPic' alt='Toys'>";
images[16] = "<img src='LysaSitePics/LysaTwizzlers.png' class='img-responsive galleryPic' alt='Twizzlers'>";
images[17] = "<img src='LysaSitePics/LysaAnimalPics.png' class='img-responsive galleryPic' alt='Animals'>";
images[18] = "<img src='LysaSitePics/LysaKitchen.png' class='img-responsive galleryPic' alt='Kitchen'>";
images[19] = "<img src='LysaSitePics/LysaCouch.png' class='img-responsive galleryPic' alt='Couch'>";

var i = 0;

function showNext() {
    if (i < images.length - 1)
    {
        i = i + 1;
        document.getElementById("lpic").innerHTML = images[i];
    }
}

function showPrevious() {
    if (i > 0)
    {
        i = i - 1;
        document.getElementById("lpic").innerHTML = "" + images[i];
    }
}

function showFirst() {
    i = 0;
    document.getElementById("lpic").innerHTML = "" + images[i];
}