const navbut = document.getElementById('navicon');
const button = document.getElementById('navbutt');
const bodie = document.getElementById('body');
// Thêm class khi click chuột
navbut.addEventListener('click', function () {
    if (button.classList.contains('navcol')) {
        button.classList.remove('navcol');
        button.classList.add('navradius');
        bodie.classList.add('body100');
        bodie.classList.remove('body90');
    } else {
        button.classList.remove('navradius');
        button.classList.add('navcol');
        bodie.classList.add('body90');
        bodie.classList.remove('body100');
    }
});

function handleResize() {
    // Kiểm tra nếu chiều rộng màn hình nhỏ hơn 768px
    if (window.innerWidth > 665) {
        button.classList.remove('navcol');
        button.classList.add('navradius');
        bodie.classList.add('body90');
        bodie.classList.remove('body100');
    }
}

// Gọi hàm khi người dùng thay đổi kích thước cửa sổ
window.addEventListener('resize', handleResize);

// Kiểm tra kích thước ban đầu của màn hình khi tải trang
handleResize();