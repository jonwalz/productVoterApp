// show modal if local storage key of userName is empty

if (!localStorage.getItem('userName')) {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'flex';
} else {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
    var userSpanEl = document.getElementById('userNameSet');
    userSpanEl.innerText = localStorage.getItem('userName');
}

// assign the users input to a variable after button press
var goButton = document.getElementById('goButton');
var userNameGlobal = '';


function goName() {
    var userName = document.getElementById('userName').value;
    localStorage.setItem('userName', userName);
    var userSpanEl = document.getElementById('userNameSet');
    userSpanEl.innerText = localStorage.getItem('userName');
    // close modal on button press
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
}

goButton.addEventListener('click', goName, false);

// close modal on x press

function closeModal() {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
}

document.getElementById('modalExit').addEventListener('click', closeModal);