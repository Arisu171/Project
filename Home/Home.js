function loadRegisterContent() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Account/Register.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = xhr.responseText;

            var registerBodyContent = tempDiv.querySelector('#body');

            if (registerBodyContent) {

                document.getElementById('body').innerHTML = registerBodyContent.innerHTML;
                console.log("Nội dung đã được chèn vào #body.");

                addRegisterResources().then(() => {

                    loadScripts(['./Account/Register.js']).then(() => {
                        reinitializeOldScripts();
                    });
                });
            }
        }
    };
    xhr.send();
}

function addRegisterResources() {
    return new Promise((resolve) => {
        // Thêm CSS trước
        Promise.all([
            addCSS("./Account/Register.css")
        ]).then(() => {
            resolve();
        });
    });
}

function addCSS(file) {
    return new Promise((resolve) => {
        if (!document.querySelector(`link[href="${file}"]`)) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = file;
            link.onload = function () {
                console.log(`CSS đã tải: ${file}`);
                resolve();
            };
            document.head.appendChild(link);
        } else {
            resolve(); // Nếu CSS đã tồn tại, tiếp tục
        }
    });
}

function loadScripts(scripts) {
    return Promise.all(scripts.map(file => {
        return new Promise((resolve) => {
            if (!document.querySelector(`script[src="${file}"]`)) {
                let newScript = document.createElement('script');
                newScript.src = file;
                newScript.onload = function () {
                    console.log(`Đã tải script: ${file}`);
                    resolve();
                };
                document.body.appendChild(newScript);
            } else {
                console.log(`Script đã tồn tại: ${file}, không cần tải lại.`);
                resolve();
            }
        });
    }));
}


// Khởi động lại các chức năng cũ từ các script trước đó
function reinitializeOldScripts() {
    // Gọi lại các hàm từ các tệp JS cũ nếu cần
    if (typeof startAutoSlide === "function") {
        startAutoSlide();
    }

    if (typeof attachEventHandlers === "function") {
        attachEventHandlers();
    }

    if (typeof validateField === "function") {
        console.log("Đảm bảo tất cả các hàm kiểm tra nhập liệu vẫn hoạt động");
    }

    if (typeof attachEventHandlers === "function") {
        attachEventHandlers();
        console.log("Đã chạy lại attachEventHandlers.");
    }

    console.log("Đã khởi động lại các chức năng cần thiết.");
}

// Hàm xử lý đăng xuất (được gắn lại trong reinitializeScripts)
function handleLogout() {
    isLoggedIn = false;
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    toggleMulticons('.multiconacc');
}

console.log("Đã khởi chạy lại các chức năng cũ.");

// Gọi hàm AJAX khi trang tải
window.addEventListener("load", function () {
    loadNavbarContent();
});
window.addEventListener("load", function () {
    loadFooterContent();
});

