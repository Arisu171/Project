function check(clickedLabel) {
    // Đặt lại tất cả các label về trạng thái mặc định
    const labels = document.querySelectorAll('.dong1 label');
    labels.forEach(label => {
        label.style.backgroundColor = ""; // Xóa màu nền
        label.querySelector('.custom-radio').style.color = ""; // Xóa màu chữ
        label.style.border = "0.5px solid #000"
    });

    // Áp dụng màu và kích thước cho label được nhấp
    clickedLabel.style.border="none"
    clickedLabel.style.backgroundColor = "#DD8834"; // Đặt màu nền
    clickedLabel.querySelector('.custom-radio').style.color = "white"; // Đặt màu chữ thành trắng
}
