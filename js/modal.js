// assign the users input to a variable after button press
var goButton = document.getElementById('goButton');
var userNameGlobal = '';

function goName() {
    var userName = document.getElementById('userName').value;
    if (localStorage.getItem('userName')) {

    } else {
        localStorage.setItem('userName', userName);
    }
    // close modal on button press
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';

}

goButton.addEventListener('click', goName, false);

// close modal on x press