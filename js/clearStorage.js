// this function is designed to clear the local storage when button is pressed

function clearData() {
    localStorage.clear(); // clears local storage

    for (var index = 0; index < imageOptions.length; index++) {
            imageOptions[index].upVotes = 0;
            imageOptions[index].displays = 0;
    }
}   

