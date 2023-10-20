// Function to validate the form
function validateForm() {
    // Add your validation logic here
    // You can use JavaScript to check if fields are filled correctly
    return true; // Return true if form is valid
}

// Function to display a popup with selected values
function displayPopup() {
    var popup = document.getElementById("popup");
    var content = document.getElementById("popupContent");

    content.innerHTML = "First Name: " + document.getElementById("firstName").value + "<br>";
    content.innerHTML += "Last Name: " + document.getElementById("lastName").value + "<br>";
    content.innerHTML += "Date of Birth: " + document.getElementById("dob").value + "<br>";
    content.innerHTML += "Country: " + document.getElementById("country").value + "<br>";

    // Add code to get and display the selected gender
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

// Function to close the popup and reset the form
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    document.getElementById("surveyForm").reset();
}

// Function to reset the form
function resetForm() {
    document.getElementById("surveyForm").reset();
}