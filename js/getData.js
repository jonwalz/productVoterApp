function getDataVotes() {
// save to local storage
    var votes = []; 
    imageOptions.map(function(obj){
        var votesObj = {};
        votesObj.label = obj.name;
        votesObj.y = obj.upVotes;
        votes.push(votesObj);
    });
    localStorage.setItem("localVotes", JSON.stringify(votes));
    console.log(votes);
    var data = JSON.parse(localStorage.getItem('localVotes'));
    return data;
}

function getDataViews(){
// save to local storage
    var views = []; 
    imageOptions.map(function(obj){
        var votesObj = {};
        votesObj.label = obj.name;
        votesObj.y = obj.upVotes;
        views.push(votesObj);
    });
    localStorage.setItem("localViews", JSON.stringify(views));
    console.log(views);

    return JSON.parse(localStorage.getItem('localViews'));
}