//down  dropp seat
const seatInput = document.getElementById('seat-input');
const dropdown = document.getElementById('dropdown');
const seatSelector = document.getElementById('seat-selector');

// Hiện/ẩn dropdown khi nhấp vào input
seatInput.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Lựa chọn số ghế
const options = dropdown.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', () => {
        seatInput.value = option.textContent; // Cập nhật giá trị input
        dropdown.style.display = 'none'; // Ẩn dropdown
    });
});

// Ẩn dropdown khi nhấp ra ngoài
document.addEventListener('click', (e) => {
    if (!seatSelector.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});
//swap giá  trị  book
// Lấy các phần tử cần thiết
const fromInput = document.getElementById('from-input');
const toInput = document.getElementById('to-input');
const swapButton = document.getElementById('swap-button');

// Thêm sự kiện cho nút hoán đổi
swapButton.addEventListener('click', () => {
    // Lưu giá trị của "From" vào biến tạm
    const temp = fromInput.value;
    // Hoán đổi giá trị
    fromInput.value = toInput.value;
    toInput.value = temp;
});
