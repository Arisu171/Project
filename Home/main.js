window.onload = function () {

    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedNickname = localStorage.getItem("nickname");

    attachEventHandlers(); // Gắn các sự kiện cần thiết

    const loginButton = document.getElementById('loginbutton');
    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    const hideElements = document.querySelectorAll('.out');
    hideElements.forEach(function (element) {
        element.addEventListener('click', function () {
            isLoggedIn = false;
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            toggleMulticons('.multiconacc');
        });
    });

    function attachEventHandlers() {
        makeElementDraggable(document.getElementById("navbutt"));

        window.addEventListener('resize', checkScreenSize);

        const elementToWatch = document.querySelector('.navradius');
        if (elementToWatch) {
            observeClassChanges(elementToWatch, 'show', '.multicon', 'show', 'hide');
        }

        const pagesIcon = document.querySelector('#Pages div i');
        if (pagesIcon) {
            pagesIcon.parentElement.addEventListener('click', toggleMulticons.bind(null, '.multiconpage'));
        }

        const transposIcon = document.querySelector('#Transpos div i');
        if (transposIcon) {
            transposIcon.parentElement.addEventListener('click', toggleMulticons.bind(null, '.multicontran'));
        }

        const navButton = document.getElementById("navicon");
        if (navButton) {
            navButton.addEventListener("click", shownav);
        }

        const navUserIcons = document.querySelectorAll('.navuser');
        navUserIcons.forEach(function (navUserIcon) {
            navUserIcon.addEventListener('click', function () {
                if (isLoggedIn) {
                    toggleMulticons('.multiconacc');
                } else {
                    const loginElement = document.getElementById('login');
                    const loginBack = document.getElementById('loginback');
                    if (loginElement) {
                        loginElement.classList.add('show');
                        loginElement.classList.remove('hide');
                        loginBack.classList.add('show');
                        loginBack.classList.remove('hide');
                    }
                }
            });
        });
    }

    function toggleMulticons(selector) {
        const multicons = document.querySelectorAll(selector);
        multicons.forEach(function (multicon) {
            if (multicon.classList.contains('show')) {
                multicon.classList.remove('show');
                multicon.classList.add('hide');
            } else {
                multicon.classList.add('show');
                multicon.classList.remove('hide');
            }
        });
    }

    function checkScreenSize() {
        const elements = document.querySelectorAll('.navhide');
        if (window.innerWidth > 665) {
            elements.forEach(function (element) {
                element.classList.remove('show');
                element.classList.add('hide');
                element.classList.add('over');
            });
        }
    }

    function shownav() {
        if (!dragging) {
            const elements = document.querySelectorAll('.navhide');
            elements.forEach(function (element) {
                if (element.classList.contains('show')) {
                    element.classList.remove('show');
                    element.classList.add('hide');
                    element.classList.add('over');
                } else {
                    element.classList.add('show');
                    element.classList.remove('hide');
                    element.classList.add('disabled');
                    setTimeout(function () {
                        element.classList.remove('over');
                        element.classList.remove('disabled');
                    }, 500);
                }
            });
        }
    }

    function observeClassChanges(targetElement, classToRemove, affectedElementsSelector, classToRemoveFromAffected, classToAddFromAffected) {
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === "class") {
                    const currentClassList = mutation.target.classList;
                    if (!currentClassList.contains(classToRemove)) {
                        const affectedElements = document.querySelectorAll(affectedElementsSelector);
                        affectedElements.forEach(function (affectedElement) {
                            affectedElement.classList.remove(classToRemoveFromAffected);
                            affectedElement.classList.add(classToAddFromAffected);
                        });
                    }
                }
            });
        });

        observer.observe(targetElement, { attributes: true });
    }

    // Dragging 
    let dragging = false;

    function makeElementDraggable(el) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        el.onmousedown = dragMouseDown;
        el.ontouchstart = dragTouchStart;

        window.addEventListener("resize", updatePositionOnResize);

        function dragMouseDown(e) {
            e.preventDefault();
            startDrag(e.clientX, e.clientY);
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function dragTouchStart(e) {
            const touch = e.touches[0];
            startDrag(touch.clientX, touch.clientY);
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementTouchDrag;
        }

        function startDrag(clientX, clientY) {
            dragging = false;
            pos3 = clientX;
            pos4 = clientY;
        }

        function elementDrag(e) {
            e.preventDefault();
            dragAction(e.clientX, e.clientY);
        }

        function elementTouchDrag(e) {
            const touch = e.touches[0];
            dragAction(touch.clientX, touch.clientY);
        }

        function dragAction(clientX, clientY) {
            dragging = true;
            pos1 = pos3 - clientX;
            pos2 = pos4 - clientY;
            pos3 = clientX;
            pos4 = clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;

            updateElementPosition();
        }

        function updateElementPosition() {
            const currentY = el.offsetTop;
            const windowHeight = window.innerHeight;
            let newY = currentY;

            if (currentY < 7) {
                newY = 7;
            } else if (currentY > (windowHeight - el.offsetHeight - 7)) {
                newY = windowHeight - el.offsetHeight - 7;
            }

            const windowWidth = window.innerWidth;
            const currentX = el.offsetLeft;
            let newX;

            if (currentX < (windowWidth / 2)) {
                newX = 7;

                const rightMulticons = document.querySelectorAll('[id^="rmulticon"]');
                rightMulticons.forEach(function (element) {
                    const newId = element.id.replace('rmulticon', 'lmulticon');
                    element.id = newId;
                });
            } else {
                newX = windowWidth - el.offsetWidth - 7;

                const leftMulticons = document.querySelectorAll('[id^="lmulticon"]');
                leftMulticons.forEach(function (element) {
                    const newId = element.id.replace('lmulticon', 'rmulticon');
                    element.id = newId;
                });
            }
            setTimeout(() => {
                el.style.left = newX + "px";
                el.style.top = newY + "px";
                dragging = false;
            }, 100);
        }

        function updatePositionOnResize() {
            updateElementPosition();
        }
    }

    function handleLogin() {
        const nickname = document.getElementById('nickname').value;
        const password = document.getElementById('password').value;

        const validCredentials = [
            { nickname: 'Orias', password: 'Log171' },
            { nickname: 'nobody123', password: 'nobody312' },
            { nickname: 'sleepyyyy', password: '3123212' }
        ];

        const isValid = validCredentials.some(credentials =>
            credentials.nickname === nickname && credentials.password === password
        );

        if (isValid) {
            isLoggedIn = true;

            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("nickname", nickname);

            const loginElement = document.getElementById('login');
            const loginBack = document.getElementById('loginback');
            if (loginElement) {
                loginElement.classList.remove('show');
                loginElement.classList.add('hide');
                loginBack.classList.remove('show');
                loginBack.classList.add('show');
            }
        } else {
            alert("Invalid login. Please try again.");
        }
    }

    const loginBack = document.getElementById('loginback');
    const loginElement = document.getElementById('login');
    loginBack.addEventListener('click', () => {
        loginBack.classList.remove('show');
        loginElement.classList.remove('show');
        loginBack.classList.add('hide');
        loginElement.classList.add('hide');
    });
};

function addFontAwesome() {
    if (!document.querySelector(`link[href="../font-awesome-6.6.0-pro-full-main/css/all.css"]`)) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../font-awesome-6.6.0-pro-full-main/css/all.css';
        document.head.appendChild(link);
    }
}

// Gọi hàm này mỗi lần cần đảm bảo Font Awesome có mặt
addFontAwesome();

// Hàm tải nội dung trang Home
function loadHome() {
    // Xóa các tài nguyên trước và tải lại các tài nguyên cần thiết cho Home
    clearPreviousResources();
    loadContent('Home.html', ['Home.js'], ['Home.css']);
}

// Hàm tải nội dung trang About Us
function loadAboutUs() {
    clearPreviousResources();
    loadContent('./Pages/About Us.html', ['./Pages/About Us.js'], ['./Pages/About Us.css']);
}

// Hàm tải nội dung trang Services
function loadServices() {
    clearPreviousResources();
    loadContent('./Pages/Our Services.html', ['./Pages/Our Services.js'], ['./Pages/Our Services.css']);
}

// Hàm tải nội dung trang Contact Us
function loadContact() {
    clearPreviousResources();
    loadContent('./Pages/Contact Us.html', ['./Pages/Contact Us.js'], ['./Pages/Contact Us.css']);
}

// Hàm tải nội dung trang Destinations
function loadDestinations() {
    clearPreviousResources();
    loadContent('./Pages/Destinations.html', ['./Pages/Destinations.js'], ['./Pages/Destinations.css']);
}

// Hàm tải nội dung trang Tourist
function loadTourList() {
    clearPreviousResources();
    loadContent('./TourList/TourList.html', ['./TourList/TourList.js'], ['./TourList/TourList.css']);
}

// Hàm tải nội dung trang Regions
function loadRegions() {
    clearPreviousResources();
    loadContent('./Regions/Regions.html', ['./Regions/Regions.js'], ['./Regions/Regions.css']);
}

// Hàm tải nội dung trang Car Rental
function loadCarRental() {
    clearPreviousResources();
    loadContent('./Transport/Car.html', ['./Transport/Car.js'], ['./Transport/Car.css']);
}

// Hàm tải nội dung trang Bus Shuttle
function loadBusShuttle() {
    clearPreviousResources();
    loadContent('./Transport/Coach.html', ['./Transport/Coach.js'], ['./Transport/Coach.css']);
}

// Hàm tải nội dung trang Airport Trans
function loadAirportTrans() {
    clearPreviousResources();
    loadContent('./Transport/Airport.html', ['./Transport/Airport.js'], ['./Transport/Airport.css']);
}

// Hàm tải nội dung trang Blog
function loadBlog() {
    clearPreviousResources();
    loadContent('./Blog/Blog.html', ['./Blog/Blog.js'], ['./Blog/Blog.css']);
}

function loadBlogContent(pgnm) {
    clearPreviousResources();
    // Tạo đường dẫn URL HTML từ thư mục Blog
    const url = `./Blog/${pgnm}.html`;
    loadContent(url, ['./Blog/Content-blog.js'], ['./Blog/Content-blog.css']);
}

// Hàm tải nội dung trang Account
function loadAccount() {
    clearPreviousResources();
    loadContent('./Account/Register.html', ['./Account/Register.js'], ['./Account/Register.css']);
}


// Hàm tải nội dung trang với việc loại bỏ các CSS và JS cũ
function loadContent(htmlFile, jsFiles = [], cssFiles = []) {
    clearPreviousResources(); // Xóa CSS và JS cũ trước khi tải mới

    var xhr = new XMLHttpRequest();
    xhr.open("GET", htmlFile, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = xhr.responseText;

            var bodyContent = tempDiv.querySelector('#body');

            if (bodyContent) {
                document.getElementById('body').innerHTML = bodyContent.innerHTML;
                console.log(`Nội dung đã được chèn từ ${htmlFile}`);

                // Thêm CSS trước
                addCSSResources(cssFiles).then(() => {
                    // Thêm JavaScript ngay sau khi HTML đã được thêm
                    addJSResources(jsFiles);
                });
            }
        }
    };
    xhr.send();
}

// Hàm thêm tệp CSS
function addCSSResources(cssFiles) {
    return new Promise((resolve) => {
        let promises = [];
        cssFiles.forEach((cssFile) => {
            promises.push(addCSS(cssFile));
        });

        Promise.all(promises).then(() => {
            resolve();
        });
    });
}

// Hàm thêm tệp JavaScript ngay lập tức sau khi HTML được thêm
function addJSResources(jsFiles) {
    const bodyContainer = document.getElementById('body');

    jsFiles.forEach((file) => {
        if (!document.querySelector(`script[src="${file}"]`)) {
            const script = document.createElement('script');
            script.src = file;
            script.onload = function () {
                console.log(`JavaScript đã tải: ${file}`);
            };
            // Thêm script ngay sau nội dung HTML đã được chèn
            if (bodyContainer) {
                bodyContainer.appendChild(script);
            } else {
                document.body.appendChild(script); // Dự phòng nếu không tìm thấy bodyContainer
            }
        }
    });
}

// Hàm thêm từng tệp CSS (giữ nguyên từ trước)
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
            resolve();
        }
    });
}

// Hàm xóa các tệp CSS và JS đã được tải từ trước đó, trừ các tệp cần giữ lại
function clearPreviousResources() {
    const cssToKeep = [
        '../font-awesome-6.6.0-pro-full-main/css/all.css',
        '../General/reset.css',
        'main.css',
    ];
    const jsToKeep = [
        'main.js',
    ];

    // Xóa các tệp CSS không cần thiết
    document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        const href = link.getAttribute('href');
        if (!cssToKeep.includes(href)) {
            link.remove();
        }
    });

    // Xóa các tệp JavaScript không cần thiết
    document.querySelectorAll('script').forEach((script) => {
        const src = script.getAttribute('src');
        if (src && !jsToKeep.includes(src)) {
            script.remove();
        }
    });
}
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