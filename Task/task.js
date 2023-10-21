function validateForm() {
    return true;
}

function displayPopup() {
    var popup = document.getElementById("popup");
    var content = document.getElementById("popupContent");

    content.innerHTML = "First Name: " + document.getElementById("firstName").value + "<br>";
    content.innerHTML += "Last Name: " + document.getElementById("lastName").value + "<br>";
    content.innerHTML += "Date of Birth: " + document.getElementById("dob").value + "<br>";
    content.innerHTML += "Country: " + document.getElementById("country").value + "<br>";

    var genderCheckboxes = document.getElementsByName("gender");
    content.innerHTML += "Gender: ";
    for (var i = 0; i < genderCheckboxes.length; i++) {
        if (genderCheckboxes[i].checked) {
            content.innerHTML += genderCheckboxes[i].value + " ";
        }
    }
    content.innerHTML += "<br>";

    content.innerHTML += "Profession: " + document.getElementById("profession").value + "<br>";
    content.innerHTML += "Email: " + document.getElementById("email").value + "<br>";
    content.innerHTML += "Mobile Number: " + document.getElementById("mobile").value + "<br>";

    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    document.getElementById("surveyForm").reset();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}