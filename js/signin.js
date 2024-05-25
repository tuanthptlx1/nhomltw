// Biến để lưu trạng thái đăng nhập
var isLoggedIn = false;

// Hàm kiểm tra tính hợp lệ của email
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

document.getElementById('sign-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Kiểm tra tính hợp lệ của email và password
    if (!isValidEmail(email)) {
        document.getElementById('signup-message').textContent = 'Vui lòng nhập một địa chỉ email hợp lệ!';
        return;
    }
    if (password.length < 8) {
        document.getElementById('signup-message').textContent = 'Mật khẩu phải chứa ít nhất 8 ký tự!';
        return;
    }

    // Kiểm tra thông tin đăng nhập
    if (email === "nguyenanhtuan2334@gmail.com" && password === "09092004") {
        // Đánh dấu là đã đăng nhập thành công
        isLoggedIn = true;

        // Hiển thị thông báo đăng nhập thành công và chuyển hướng sau 3 giây
        alert('Đăng nhập thành công!');
        window.location.href = '../html1/shop1.html';
    } else {
        // Thông báo sai thông tin đăng nhập
        alert('Thông tin đăng nhập không chính xác. Vui lòng nhập lại!');
    }
});
