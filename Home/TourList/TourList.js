document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('body-tour-list');

    function loadPage(file) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", file, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Thay thế nội dung của `body-tour-list` bằng nội dung mới
                    content.innerHTML = xhr.responseText;
                } else {
                    console.error("Lỗi khi tải trang: " + xhr.status);
                }
            }
        };
        
        // Xử lý nếu có lỗi xảy ra
        xhr.onerror = function() {
            console.error("Yêu cầu AJAX gặp sự cố.");
        };

        xhr.send();
    }

    // Gắn hàm `loadPage` vào toàn cục để có thể truy cập từ các thẻ `a` trong HTML
    window.loadPage = loadPage;
});
