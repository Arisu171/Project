function toggleEdit() {
    const inputs = document.querySelectorAll('.profile-card .details input');
    const editBtn = document.querySelector('.edit-btn');
    const isEditing = editBtn.classList.contains('editing');
    const pen=document.getElementsByClassName('fa-pen');
    if (isEditing) {
        // Nếu đang ở chế độ chỉnh sửa, lưu thông tin và chuyển sang chế độ xem
        inputs.forEach(input => {
            input.setAttribute('readonly', true);
        });
        for (let i = 0; i < pen.length; i++) {
            pen[i].style.display = 'none';
        }
        editBtn.textContent = 'Edit Profile';
    } 
    else {
        // Nếu không ở chế độ chỉnh sửa, bật chế độ chỉnh sửa
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
