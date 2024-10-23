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
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
});

document.querySelector('.custom-checkbox').addEventListener('click', function () {
    const checkbox = this.querySelector('input');
    const display = this.querySelector('.checkbox-display');
    
    checkbox.checked = !checkbox.checked; // Đảo ngược trạng thái checked
    display.classList.toggle('checked', checkbox.checked); // Thêm hoặc bỏ lớp "checked" để thay đổi màu sắc
});
