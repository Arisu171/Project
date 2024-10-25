let previousContent = ''; // Biến lưu nội dung trước

function loadDash(file) {
    // Lưu nội dung hiện tại vào previousContent
    const dashContentElements = document.getElementsByClassName("dash-content");
    if (dashContentElements.length > 0) {
        previousContent = dashContentElements[0].innerHTML;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", file, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            for (let i = 0; i < dashContentElements.length; i++) {
                dashContentElements[i].innerHTML = xhr.responseText;
            }
        }
    };
    xhr.send();
}

function loadPreviousContent() {
    const dashContentElements = document.getElementsByClassName("dash-content");
    if (dashContentElements.length > 0) {
        // Giữ lại nội dung hiện tại trước khi thay đổi
        const currentContent = dashContentElements[0].innerHTML;
        for (let i = 0; i < dashContentElements.length; i++) {
            dashContentElements[i].innerHTML = previousContent;
        }
        // Cập nhật previousContent với nội dung hiện tại trước khi thay đổi
        previousContent = currentContent;
    }
}
document.querySelectorAll('.dashboardcontent .dash-menu a').forEach(link => {
    link.addEventListener('click', function() {
        // Xóa lớp 'active' khỏi tất cả các thẻ <a>
        document.querySelectorAll('.dashboardcontent .dash-menu a').forEach(item => {
            item.classList.remove('active');
        });

        // Thêm lớp 'active' vào thẻ <a> được nhấn
        this.classList.add('active');
    });
});

// Hàm để khôi phục lại nội dung trước đó

/*hàm chỉnh profile*/
function toggleEdit() {
    const inputs = document.querySelectorAll('.profile-card .details input');
    const editBtn = document.querySelector('.edit-btn');
    const isEditing = editBtn.classList.contains('editing');
    const pen=document.getElementsByClassName('fa-pen');
    if (isEditing) {
        inputs.forEach(input => {
            input.setAttribute('readonly', true);
        });
        for (let i = 0; i < pen.length; i++) {
            pen[i].style.display = 'none';
        }
        editBtn.textContent = 'Edit Profile';
    } 
    else {
        inputs.forEach(input => {
            input.removeAttribute('readonly');
        });
        for (let i = 0; i < pen.length; i++) {
            pen[i].style.display = 'inline-block';
        }
        editBtn.textContent = 'Save Profile';
    }
    editBtn.classList.toggle('editing');
}

/*hoán đổi giá trị change-pass*/
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
function nhap(){
    if(passwordnew.value===passwordconfirm.value){
        alert('BẠN ĐÃ ĐỔI MẬT KHẨU THÀNH CÔNG');
    }
    else if(passwordnew.value!==passwordconfirm.value){
        alert('MẬT KHẨU KHÔNG TRÙNG NHAU')
    }
}


