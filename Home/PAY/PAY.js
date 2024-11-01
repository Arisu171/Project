function loadPay(file) {
    // Lưu nội dung hiện tại vào previousContent
    const dashContentElement = document.getElementById("payment");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", file, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            dashContentElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

