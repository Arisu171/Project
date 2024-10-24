function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const eyeIcon = button.parentElement.querySelector('.fa-eye');
    const eyeSlashIcon = button.parentElement.querySelector('.fa-eye-slash');

    if (input.type === 'password') {
        input.type = 'text'; // Hiển thị mật khẩu
        eyeIcon.parentElement.style.display = 'none'; // Ẩn nút hiện tại
        eyeSlashIcon.parentElement.style.display = 'inline-block'; // Hiển thị nút kia
    } else {
        input.type = 'password'; // Ẩn mật khẩu
        eyeIcon.parentElement.style.display = 'inline-block'; // Hiển thị nút hiện tại
        eyeSlashIcon.parentElement.style.display = 'none'; // Ẩn nút kia
    }
}
