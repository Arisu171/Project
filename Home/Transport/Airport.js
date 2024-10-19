document.getElementById('swap-button').addEventListener('click', function() {
    // Lấy giá trị từ các ô input
    const fromInput = document.getElementById('from-input');
    const toInput = document.getElementById('to-input');
    
    // Hoán đổi giá trị
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
});
