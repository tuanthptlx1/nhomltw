function toggleGender(element) {
    var genderDiv = element.nextElementSibling; // Lấy phần tử liền kề
    if (genderDiv.style.display === "none") {
        genderDiv.style.display = "block";
    } else {
        genderDiv.style.display = "none";
    }
}

