//callback
//A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.
function submitForm(submit, isFormValid) {
    if (isFormValid) {
        console.log("Field Validated Successfully");
        console.log(submit);
    } else {
        console.log("Field Validation Failed");
        console.log("Form Submission Failed");
    }
}

function formValidation() {
    let email = "sece@sece.ac.in";
    let password = "12345";
    if (email === "sece@sece.ac.in" && password) {
        return true;
    } else {
        return false;
    }
}
]
submitForm("Form Submitted Successfully", formValidation());
