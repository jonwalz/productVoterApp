var totalVotes = 0;
var imageTracker = function(name, source) {
    this.imageSource = source;
    this.upVotes = 0;
    this.name = name;
    this.displays = 0;
};


var imageOptions = [
    new imageTracker("Banana", "images/banana.jpg"),
    new imageTracker("Bag", "images/bag.jpg"),
    new imageTracker("Boots", "images/boots.jpg"),
    new imageTracker("Chair", "images/chair.jpg"),
    new imageTracker("Cthulhu", "images/cthulhu.jpg"),
    new imageTracker("Dragon", "images/dragon.jpg"),
    new imageTracker("Pen", "images/pen.jpg"),
    new imageTracker("Scissor", "images/scissors.jpg"),
    new imageTracker("Shark", "images/shark.jpg"),
    new imageTracker("Sweep", "images/sweep.jpg"),
    new imageTracker("Unicorn", "images/unicorn.jpg"),
    new imageTracker("Usb", "images/usb.jpg"),
    new imageTracker("Water Can", "images/water_can.jpg"),
    new imageTracker("Wine Glass", "images/wine_glass.jpg"),
];

function getThreeImages() {
    var pickedImages = [];
    for (var imageId = 1; imageId <= 3; imageId++) {
        do {
            var index = Math.floor(Math.random() * 14);
        } while (pickedImages.indexOf(index) >= 0);
        var source = imageOptions[index].imageSource;
        document.getElementById("img" + imageId).src = source;
        pickedImages.push(index);
    }
    // track displayed images
        pickedImages.forEach(function(el){
            imageOptions[el].displays++;
        });
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
        el.innerText = "You have reached 15 votes.";
        var br = document.createElement('br');

        var h12 = document.createElement('h1');
        h12.innerText = "This is what you voted for:";
        var parentEl = document.getElementById('votes');

        parentEl.appendChild(elH1).appendChild(el);
        parentEl.appendChild(h12);
        var removeText = document.getElementById('instructions');
        removeText.parentNode.remove();

        var votesList = document.createElement('ul');
        votesList.className = "votesList";
        for (var i = 0; i < imageOptions.length; i++) {
            if (imageOptions[i].upVotes !== 0) {
                var voteLi = document.createElement('li');
                voteLi.innerText = imageOptions[i].name + ": " + imageOptions[i].upVotes;
                votesList.appendChild(voteLi);
            }
        }
        
        dataConstruct();
        parentEl.parentElement.appendChild(votesList);

        // append to votes element
        document.getElementById('votes').parentNode.style.display = "flex";

        var chartHide = document.getElementById('hideChart');
        chartHide.style.display = 'block';
        
        var chartContainer = document.getElementById('canvasjs-chart-container');
        // chartContainer.style.width= "100%"
        renderChart();
    }
}
getThreeImages();

// hide the chart container before rendering

(function hideChart() {
    var chartHide = document.getElementById('hideChart');
    chartHide.style.display = 'none';
})();