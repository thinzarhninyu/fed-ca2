submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submit);
var course = document.querySelectorAll('.form-check-input');
function submit() {
    for (i = 0; i < course.length; i++) {

        if (course[i].checked == true) {
            message = "Thank you! Your form has been submitted!"
            
            break;
        }
        else {
           message="You must select one option!"
            
        }
    }
    window.alert(message);
}