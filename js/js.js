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

// document.getElementById('container').addEventListener("click", recordClick);

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
        }
    }
    getThreeImages();
    checkVotes();
    
    console.log(imageOptions[0].upVotes);
}

(function removeVotesEl() {
    var el = document.getElementById('votes');
    el.parentNode.style.display = "none";
})();

function checkVotes() {
    totalVotes++;
    if (totalVotes == 15) {
        var el = document.createElement('div');
        var elH1 = document.createElement('h1');
        el.className = "totalVotes";
        el.innerText = "You have reached 15 votes. This is what you voted for:";
        var parentEl = document.getElementById('votes');
        
        parentEl.appendChild(elH1).appendChild(el);

        var removeText = document.getElementById('instructions');
        removeText.parentNode.remove();

        var votesList = document.createElement('ul');
        votesList.className = "votesList";
        for (var i = 0; i < imageOptions.length; i++) {
            if(imageOptions[i].upVotes != 0) {
                var voteLi = document.createElement('li');
                voteLi.innerText = imageOptions[i].name + ": " + imageOptions[i].upVotes;
                votesList.appendChild(voteLi);
            }   
        }
        
        parentEl.appendChild(votesList);
        // document.getElementById('container').removeEventListener("click", recordClick);
        document.getElementById('votes').parentNode.style.display = "Block";
        renderChart();
    }
}

getThreeImages();

