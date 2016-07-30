var totalVotes = 0;
var imageTracker = function(name, source) {
    this.imageSource = source;
    this.upVotes = 0;
    this.name = name;
};

var imageOptions = [
    new imageTracker("Banana", "images/banana.jpg"),
    new imageTracker("Bag", "images/bag.jpg"),
    new imageTracker("Boots", "images/boots.jpg"),
    new imageTracker("Chair", "images/chair.jpg"),
    new imageTracker("Cthulhu", "images/cthulhu.jpg"),
    new imageTracker("Dragon", "images/dragon.jpg"),
];

document.getElementById('container').addEventListener("click", recordClick);

function getThreeImages() {
    var pickedImages = [];
    for (var imageId = 1; imageId <= 3; imageId++) {
        do {
            var index = Math.floor(Math.random() * 6);
        } while (pickedImages.indexOf(index) >= 0);
        var source = imageOptions[index].imageSource;
        document.getElementById("img" + imageId).src = source;
        pickedImages.push(index);
    }
}

function recordClick(event) {
    var imageSource = event.target.src;
    for (var index = 0; index < imageOptions.length; index++) {
        if (imageSource.indexOf(imageOptions[index].imageSource) >= 0) {
            imageOptions[index].upVotes++;
            console.log('Image Clicked: ' + imageOptions[index].name);
        }
    }
    getThreeImages();
    checkVotes();
}

function checkVotes() {
    totalVotes++;
    if (totalVotes == 15) {
        var el = document.createElement('div');
        el.className = "totalVotes";
        var parentEl = document.getElementById('votes');
        console.log("Votes reached 15");
    }
}

getThreeImages();