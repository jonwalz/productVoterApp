// show modal if local storage: userName is empty

if (!localStorage.getItem('userName')) {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'flex';
} else {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
}

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

function closeModal(){
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
}

document.getElementById('modalExit').addEventListener('click', closeModal);