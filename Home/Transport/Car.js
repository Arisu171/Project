let cursorVisible = false; // Biến để theo dõi trạng thái con trỏ

function showCursor() {
    document.querySelector('.cursor').style.display = 'block';
    cursorVisible = true; // Đặt trạng thái con trỏ thành hiển thị
}

function hideCursor() {
    document.querySelector('.cursor').style.display = 'none';
    cursorVisible = false; // Đặt trạng thái con trỏ thành ẩn
}

// Thêm sự kiện click
document.addEventListener('click', function(event) {
    if (!cursorVisible) {
        showCursor(); // Hiện con trỏ nếu nó đang ẩn
    } else {
        hideCursor(); // Ẩn con trỏ nếu nó đang hiển thị
    }
});

// Đảm bảo ẩn con trỏ khi trang được tải
hideCursor();

// Thêm sự kiện mousemove để không hiện con trỏ nếu không nhấn chuột
document.addEventListener('mousemove', function(event) {
    if (cursorVisible) {
        const cursor = document.querySelector('.cursor');
        cursor.style.left = event.pageX + 'px'; // Cập nhật vị trí con trỏ
        cursor.style.top = event.pageY + 'px';
    }
});

/*chuot book xe*/
let chuotVisible = false; // Biến để theo dõi trạng thái con trỏ

function showchuot() {
    document.querySelector('.chuot').style.display = 'block';
    chuotVisible = true; // Đặt trạng thái con trỏ thành hiển thị
}

function hidechuot() {
    document.querySelector('.chuot').style.display = 'none';
    chuotVisible = false; // Đặt trạng thái con trỏ thành ẩn
}

// Thêm sự kiện click
document.addEventListener('click', function(event) {
    if (!chuotVisible) {
        showchuot(); // Hiện con trỏ nếu nó đang ẩn
    } else {
        hidechuot(); // Ẩn con trỏ nếu nó đang hiển thị
    }
});

// Đảm bảo ẩn con trỏ khi trang được tải
hidechuot();

// Thêm sự kiện mousemove để không hiện con trỏ nếu không nhấn chuột
document.addEventListener('mousemove', function(event) {
    if (chuotVisible) {
        const chuot = document.querySelector('.chuot');
        chuot.style.left = event.pageX + 'px'; // Cập nhật vị trí con trỏ
        chuot.style.top = event.pageY + 'px';
    }
});
