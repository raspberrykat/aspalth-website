document.getElementById('openPopUpButton').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex'
});

document.getElementById('closePopUpButton').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none'
});

function validateData(){
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    var confpass = document.getElementById("confpass").value
    var dob = document.getElementById("dob").value
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var agree = document.getElementById("agree")

    if(firstName.length < 1){
        alert("First name must be filled!")
    }
    else if(lastName.length < 1){
        alert("Last name must be filled!")
    }
    else if(username.length < 8 || username.length > 20){
        alert("Username must be between 8-20 characters!")
    }
    else if (!validateEmail(email)) {
        alert("Please enter a valid email address!")
    }
    else if(!checkAlphanumeric(pass)){
        alert("Password must be alphanumeric (containing alphabeth & number)!")
    }
    else if(pass != confpass){
        alert("Password doesn't match")
    }
    else if(!male.checked && ! female.checked){
        alert("Gender must be selected")
    }
    else if (!agree.checked){
        alert("You must agree to the terms and conditions")
    }
    else{
        alert("Subscription successfull!")
        document.getElementById('popupForm').style.display = 'none'
    }
}

function checkAlphanumeric(pass){
    var alpha = false
    var num = false

    for (let i = 0; i < pass.length; i++){
        if(isNaN(pass[i])){
            alpha = true
        }
        else{
            num = true
        }

        if (alpha && num){
            return true
        }
    }

    return false
}