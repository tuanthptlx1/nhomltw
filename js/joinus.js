document.addEventListener("DOMContentLoaded", function() {
    var joinForm = document.getElementById("joinus-form");
    if (joinForm) {
        joinForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            var email = document.getElementById("new_email").value;
            var password = document.getElementById("new_password").value;
            var firstName = document.getElementById("first_name").value;
            var lastName = document.getElementById("last_name").value;
            var dob = document.getElementById("dob").value;
            var country = document.getElementById("country").value;
            var gender = document.querySelector("input[name='gender']:checked");
            var emailUpdates = document.querySelector("#checkbox input[type='checkbox']").checked;

            // Kiểm tra tính hợp lệ của dữ liệu
            var isValid = true;
            var errorMessages = [];

            if (!isValidEmail(email)) {
                isValid = false;
                errorMessages.push("Invalid email address.");
            }

            if (!isValidPassword(password)) {
                isValid = false;
                errorMessages.push("Password must be at least 8 characters long.");
            }

            if (!firstName.trim() || !lastName.trim()) {
                isValid = false;
                errorMessages.push("First name and last name are required.");
            }

            if (!gender) {
                isValid = false;
                errorMessages.push("Gender is required.");
            }

            // Hiển thị thông báo lỗi nếu có
            var errorContainer = document.getElementById("error-container");
            if (!isValid) {
                errorContainer.innerHTML = "<p>" + errorMessages.join("<br>") + "</p>";
                errorContainer.style.display = "block";
            } else {
                errorContainer.style.display = "none";
                // Gửi dữ liệu đến server (tạm thời in ra console)
                console.log("Email:", email);
                console.log("Password:", password);
                console.log("First Name:", firstName);
                console.log("Last Name:", lastName);
                console.log("Date of Birth:", dob);
                console.log("Country:", country);
                console.log("Gender:", gender.value);
                console.log("Sign up for email updates:", emailUpdates);
            }
        });
    }
});

function isValidEmail(email) {
    // Kiểm tra tính hợp lệ của địa chỉ email
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Kiểm tra tính hợp lệ của mật khẩu (ít nhất 8 ký tự)
    return password.length >= 8;
}
