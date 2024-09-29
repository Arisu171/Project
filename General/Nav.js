const navbut = document.getElementById('navicon');
const button = document.getElementById('navbutt');
const main = document.getElementById('main');

// Thêm class khi click chuột
navbut.addEventListener('click', function () {
    if (button.classList.contains('navcol')) {
        button.classList.remove('navcol');
        main.classList.remove('main1');
        button.classList.add('navradius');
        main.classList.add('main0');
    } else {
        button.classList.remove('navradius');
        main.classList.remove('main0');
        button.classList.add('navcol');
        main.classList.add('main1');
    }
});

function handleResize() {
    // Kiểm tra nếu chiều rộng màn hình nhỏ hơn 768px
    if (window.innerWidth > 665) {
        button.classList.remove('navcol');
        main.classList.remove('main1');
        button.classList.add('navradius');
        main.classList.add('main0');
    }
}

// Gọi hàm khi người dùng thay đổi kích thước cửa sổ
window.addEventListener('resize', handleResize);

// Kiểm tra kích thước ban đầu của màn hình khi tải trang
handleResize();