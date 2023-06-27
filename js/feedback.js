addEventListener('submit', submit);

var nameInput = document.getElementById('name');
nameInput.oninvalid = function() {
    window.alert('Name should only contain letters. e.g. John Wick');
}

var emailInput = document.getElementById('email');
emailInput.oninvalid = function(){
    window.alert('Invalid email address.');
}

function submit(){
    window.confirm("Thank you. Your form has been submitted!")
}