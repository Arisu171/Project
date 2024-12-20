window.onload = function () {

    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedNickname = localStorage.getItem("nickname");

    attachEventHandlers();

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

addFontAwesome();

//AJAX
function loadHome() {
    clearPreviousResources();
    loadContent('Home.html', ['Home.js'], ['Home.css']);
}

function loadAboutUs() {
    clearPreviousResources();
    loadContent('./Pages/About Us.html', ['./Pages/About Us.js'], ['./Pages/About Us.css']);
}

function loadServices() {
    clearPreviousResources();
    loadContent('./Pages/Our Services.html', ['./Pages/Our Services.js'], ['./Pages/Our Services.css']);
}

function loadContact() {
    clearPreviousResources();
    loadContent('./Pages/Contact Us.html', ['./Pages/Contact Us.js'], ['./Pages/Contact Us.css']);
}

function loadDestinations() {
    clearPreviousResources();
    loadContent('./Pages/Destinations.html', ['./Pages/Destinations.js'], ['./Pages/Destinations.css']);
}

function loadTourList() {
    clearPreviousResources();
    loadContent('./TourList/TourList.html', ['./TourList/TourList.js'], ['./TourList/TourList.css']);
}
function loadCatBa() {
    clearPreviousResources();
    loadContent('./TourList/CatBa.html', ['./TourList/TourList.js'], ['./TourList/TourList.css']);
}
function loadMaiChau() {
    clearPreviousResources();
    loadContent('./PAY/PAY.html', ['./TourList/TourList.js', './Pay/Pay.js'], ['./Pay/Pay.css']);
}
function loadMausoleum() {
    clearPreviousResources();
    loadContent('./PAY/PAY.html', ['./TourList/TourList.js', './Pay/Pay.js'], ['./Pay/Pay.css']);
}
function loadCuLaoCham() {
    clearPreviousResources();
    loadContent('./PAY/PAY.html', ['./TourList/TourList.js', './Pay/Pay.js'], ['./Pay/Pay.css']);
}
function loadOfficeSG() {
    clearPreviousResources();
    loadContent('./PAY/PAY.html', ['./TourList/TourList.js', './Pay/Pay.js'], ['./Pay/Pay.css']);
}
function loadGreenHill() {
    clearPreviousResources();
    loadContent('./PAY/PAY.html', ['./TourList/TourList.js', './Pay/Pay.js'], ['./Pay/Pay.css']);
}
function loadRegions() {
    clearPreviousResources();
    loadContent('./Regions/Regions.html', ['./Regions/Regions.js'], ['./Regions/Regions.css']);
}
function loadCentralRegion() {
    clearPreviousResources();
    loadContent('./Regions/Central Region.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadCentralHighland() {
    clearPreviousResources();
    loadContent('./Regions/Central Highland.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadNothern() {
    clearPreviousResources();
    loadContent('./Regions/Nothern.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadCentralRegion() {
    clearPreviousResources();
    loadContent('./Regions/Southern.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadCarRental() {
    clearPreviousResources();
    loadContent('./Transport/Car.html', ['./Transport/Car.js'], ['./Transport/Car.css']);
}

function loadBusShuttle() {
    clearPreviousResources();
    loadContent('./Transport/Coach.html', ['./Transport/Coach.js'], ['./Transport/Coach.css']);
}

function loadAirportTrans() {
    clearPreviousResources();
    loadContent('./Transport/Airport.html', ['./Transport/Airport.js'], ['./Transport/Airport.css']);
}

function loadBlog() {
    clearPreviousResources();
    loadContent('./Blog/Blog.html', ['./Blog/Blog.js'], ['./Blog/Blog.css']);
}

function loadBlogContent(pgnm) {
    clearPreviousResources();
    const pgmurl = `./Blog/${pgnm}.html`;
    loadContent(pgmurl, ['./Blog/Content-blog.js'], ['./Blog/Content-blog.css']);
}

function loadRegisterContent() {
    clearPreviousResources();
    loadContent('./Account/Register.html', ['./Account/Register.js'], ['./Account/Register.css']);
}
function loadDashboard() {
    clearPreviousResources();
    loadContent('./Account/Dashboard.html', ['./Account/Dashboard.js'], ['./Account/Dashboard.css']);
}

function loadChangepass() {
    clearPreviousResources();
    loadContent('./Account/Change-pass.html', ['./Account/Dashboard.js'], ['./Account/Dashboard.css']);
}
function loadHaNoi() {
    clearPreviousResources();
    loadContent('./Regions/Northen/Hanoi.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadQuangNinh() {
    clearPreviousResources();
    loadContent('./Regions/Northen/QuangNinh.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadNinhBinh() {
    clearPreviousResources();
    loadContent('./Regions/Northen/NinhBinh.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadHCM() {
    clearPreviousResources();
    loadContent('./Regions/Southern/HCM.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadCanTho() {
    clearPreviousResources();
    loadContent('./Regions/Southern/CanTho.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadPhuQuoc() {
    clearPreviousResources();
    loadContent('./Regions/Southern/PhuQuoc.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadDaLat() {
    clearPreviousResources();
    loadContent('./Regions/Highlands/DaLat.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadKonTum() {
    clearPreviousResources();
    loadContent('./Regions/Highlands/KonTum.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadBuonMaThuot() {
    clearPreviousResources();
    loadContent('./Regions/Highlands/BuonMaThuot.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadDaNang() {
    clearPreviousResources();
    loadContent('./Regions/Central/DaNang.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadHoiAn() {
    clearPreviousResources();
    loadContent('./Regions/Central/HoiAn.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}
function loadHue() {
    clearPreviousResources();
    loadContent('./Regions/Central/Hue.html', ['./Regions/Region.js', './TourList/TourList.js'], ['./Regions/Region.css']);
}

function loadContent(htmlFile, jsFiles = [], cssFiles = []) {
    clearPreviousResources();

    toggleFade(true);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", htmlFile, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            setTimeout(() => {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = xhr.responseText;

                var bodyContent = tempDiv.querySelector('#body');

                if (bodyContent) {
                    document.getElementById('body').innerHTML = bodyContent.innerHTML;
                    console.log(`Nội dung đã được chèn từ ${htmlFile}`);

                    addCSSResources(cssFiles).then(() => {
                        addJSResources(jsFiles).then(() => {
                            reinitializeOldScripts();
                        });
                    });
                }
            }, 300);
        }
    };
    xhr.send();
}

// CSS
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

// JS
function addJSResources(jsFiles) {
    return new Promise((resolve) => {
        let loadedScripts = [];
        jsFiles.forEach((file) => {
            loadedScripts.push(addJS(file));
        });

        Promise.all(loadedScripts).then(() => {
            resolve();
        });
    });
}

function addJS(file) {
    return new Promise((resolve) => {
        if (!document.querySelector(`script[src="${file}"]`)) {
            const script = document.createElement('script');
            script.src = file;
            script.async = true;
            script.onload = function () {
                console.log(`JavaScript đã tải: ${file}`);
                resolve();
            };
            document.body.appendChild(script);
        } else {
            resolve();
        }
    });
}

// Xóa CSS JS 
function clearPreviousResources() {
    const cssToKeep = [
        '../font-awesome-6.6.0-pro-full-main/css/all.css',
        '../General/reset.css',
        'main.css',
        'Banner.css',
    ];
    const jsToKeep = [
        'main.js',
        'Banner.js',
    ];

    document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        const href = link.getAttribute('href');
        if (!cssToKeep.includes(href)) {
            link.remove();
        }
    });

    document.querySelectorAll('script').forEach((script) => {
        const src = script.getAttribute('src');
        if (src && !jsToKeep.includes(src)) {
            script.remove();
        }
    });
}

// Bộ lọc tìm kiếm
function setupSearchFilters() {
    const urlParams = new URLSearchParams(window.location.search);

    const region = urlParams.get('region') || '0';
    const type = urlParams.get('type') || '0';
    const time = urlParams.get('time') || '0';
    const reviews = urlParams.get('reviews') || '0';
    const cost = urlParams.get('cost') || '0';

    applyFilters(region, type, time, reviews, cost);
}

function applyFilters(region, type, time, reviews, cost) {
    const tourItems = document.querySelectorAll('.tour-item');
    const otherSuggestions = document.getElementById('other-suggestions');

    let unmatchedItems = [];

    tourItems.forEach(item => {
        const itemRegion = item.getAttribute('data-region');
        const itemType = item.getAttribute('data-type');
        const itemTime = item.getAttribute('data-time');
        const itemReviews = item.getAttribute('data-reviews');
        const itemCost = item.getAttribute('data-cost');

        let matchesFilter = true;

        if (region !== '0' && itemRegion !== region) {
            item.style.display = 'none';
            return;
        }
        if (type !== '0' && itemType !== type) matchesFilter = false;
        if (time !== '0' && itemTime !== time) matchesFilter = false;
        if (reviews !== '0' && itemReviews !== reviews) matchesFilter = false;
        if (cost !== '0' && itemCost !== cost) matchesFilter = false;

        if (matchesFilter) {
            item.style.display = 'block';
        } else {
            unmatchedItems.push(item);
        }
    });

    if (unmatchedItems.length <= 2) {
        unmatchedItems.forEach(item => {
            otherSuggestions.appendChild(item);
            item.style.display = 'block';
        });
    } else {
        unmatchedItems.forEach(item => {
            item.style.display = 'none';
        });
    }
}

function initializeDateDropdown() {
    const ngaySelect = document.getElementById('ngay');
    const thangSelect = document.getElementById('thang');
    const namSelect = document.getElementById('nam');

    if (!ngaySelect || !thangSelect || !namSelect) {
        console.warn("Các phần tử chọn ngày, tháng, năm không tồn tại.");
        return;
    }

    for (let i = 1950; i <= new Date().getFullYear(); i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        namSelect.appendChild(option);
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function getDaysInMonth(month, year) {
        if (month === 2) {
            return isLeapYear(year) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(month)) {
            return 30;
        } else {
            return 31;
        }
    }

    function initializeDays() {
        ngaySelect.innerHTML = '<option value="" disabled selected>Day</option>';
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            ngaySelect.appendChild(option);
        }
    }

    function updateDays() {
        const month = parseInt(thangSelect.value);
        const year = parseInt(namSelect.value);
        if (isNaN(month) || isNaN(year)) return;

        const currentDay = parseInt(ngaySelect.value);
        const daysInMonth = getDaysInMonth(month, year);

        if (currentDay > daysInMonth) {
            initializeDays();
        } else if (ngaySelect.options.length - 1 !== daysInMonth) {
            ngaySelect.innerHTML = '<option value="" disabled selected>Day</option>';
            for (let i = 1; i <= daysInMonth; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = i;
                ngaySelect.appendChild(option);
            }
            if (currentDay) {
                ngaySelect.value = currentDay;
            }
        }
    }

    initializeDays();
    thangSelect.addEventListener('change', updateDays);
    namSelect.addEventListener('change', updateDays);
}

function reattachGoogleFonts() {
    const existingFontLinks = [
        'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Koulen&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&family=Koulen&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Koulen&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
    ];

    existingFontLinks.forEach((href) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
            console.log(`Google Font đã được gắn lại: ${href}`);
        }
    });
}

function reinitializeOldScripts() {
    if (typeof startAutoSlide === "function") {
        startAutoSlide();
        console.log("Đã khởi động lại slideshow tự động.");
    }

    document.querySelectorAll('.bannercurrent div').forEach((dot, index) => {
        dot.removeEventListener('click', handleDotClick);
        dot.addEventListener('click', handleDotClick.bind(null, index + 1));
    });

    if (typeof updateDots === "function") {
        updateDots();
        console.log("Đã cập nhật lại các dots điều hướng.");
    }

    // Khởi động lại hàm khởi tạo dropdown ngày tháng
    initializeDateDropdown();
    console.log("Đã khởi động lại danh sách ngày và năm.");

    reattachGoogleFonts();
    console.log("Đã gắn lại Google Fonts.");

    setupSearchFilters();

    reinitializeSearchFilters();
}



function handleDotClick(index) {
    goToBanner(index);
    startAutoSlide();
}

function toggleFade(show) {
    let fadeOverlay = document.querySelector('.fade-overlay');

    if (!fadeOverlay) {
        fadeOverlay = document.createElement('div');
        fadeOverlay.className = 'fade-overlay';
        document.body.appendChild(fadeOverlay);
    }

    if (show) {
        fadeOverlay.classList.add('active');

        setTimeout(() => {
            fadeOverlay.classList.remove('active');
        }, 500);
    } else {
        fadeOverlay.classList.remove('active');
    }
}

function initializeDateDropdown() {
    const ngaySelect = document.getElementById('ngay');
    const thangSelect = document.getElementById('thang');
    const namSelect = document.getElementById('nam');

    // Kiểm tra các phần tử tồn tại trước khi thao tác
    if (!ngaySelect || !thangSelect || !namSelect) {
        console.warn("Các phần tử chọn ngày, tháng, năm không tồn tại.");
        return;
    }

    // Khởi tạo năm từ 1950 đến năm hiện tại
    for (let i = 1950; i <= new Date().getFullYear(); i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        namSelect.appendChild(option);
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function getDaysInMonth(month, year) {
        if (month === 2) {
            return isLeapYear(year) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(month)) {
            return 30;
        } else {
            return 31;
        }
    }

    function initializeDays() {
        ngaySelect.innerHTML = '<option value="" disabled selected>Day</option>';
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            ngaySelect.appendChild(option);
        }
    }

    function updateDays() {
        const month = parseInt(thangSelect.value);
        const year = parseInt(namSelect.value);
        if (isNaN(month) || isNaN(year)) {
            return;
        }

        const currentDay = parseInt(ngaySelect.value);
        const daysInMonth = getDaysInMonth(month, year);

        if (currentDay > daysInMonth) {
            initializeDays();
        } else if (ngaySelect.options.length - 1 !== daysInMonth) {
            ngaySelect.innerHTML = '<option value="" disabled selected>Day</option>';
            for (let i = 1; i <= daysInMonth; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = i;
                ngaySelect.appendChild(option);
            }
            if (currentDay) {
                ngaySelect.value = currentDay;
            }
        }
    }

    initializeDays();

    thangSelect.addEventListener('change', updateDays);
    namSelect.addEventListener('change', updateDays);
}

// search
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    const region = urlParams.get('region') || '0';
    const type = urlParams.get('type') || '0';
    const time = urlParams.get('time') || '0';
    const reviews = urlParams.get('reviews') || '0';
    const cost = urlParams.get('cost') || '0';

    applyFilters(region, type, time, reviews, cost);
});

function applyFilters(region, type, time, reviews, cost) {
    const tourItems = document.querySelectorAll('.tour-item');
    const otherSuggestions = document.getElementById('other-suggestions');

    let unmatchedItems = [];

    tourItems.forEach(item => {
        const itemRegion = item.getAttribute('data-region');
        const itemType = item.getAttribute('data-type');
        const itemTime = item.getAttribute('data-time');
        const itemReviews = item.getAttribute('data-reviews');
        const itemCost = item.getAttribute('data-cost');

        let matchesFilter = true;

        if (region !== '0' && itemRegion !== region) {
            item.style.display = 'none';
            return;
        }
        if (type !== '0' && itemType !== type) {
            matchesFilter = false;
        }
        if (time !== '0' && itemTime !== time) {
            matchesFilter = false;
        }
        if (reviews !== '0' && itemReviews !== reviews) {
            matchesFilter = false;
        }
        if (cost !== '0' && itemCost !== cost) {
            matchesFilter = false;
        }

        if (matchesFilter) {
            item.style.display = 'block';
        } else {
            unmatchedItems.push(item);
        }
    });

    if (unmatchedItems.length <= 2) {
        unmatchedItems.forEach(item => {
            otherSuggestions.appendChild(item);
            item.style.display = 'block';
        });
    } else {

        unmatchedItems.forEach(item => {
            item.style.display = 'none';
        });
    }
}

function reinitializeSearchFilters() {
    const regionOptions = [
        { value: "1", text: "Northern Region" },
        { value: "2", text: "Southern Region" },
        { value: "3", text: "Central Region" },
        { value: "4", text: "Central Highland" },
        { value: "0", text: "All Regions" }
    ];

    const typeOptions = [
        { value: "1", text: "Beach" },
        { value: "2", text: "City" },
        { value: "3", text: "Nature" },
        { value: "4", text: "Outdoor" },
        { value: "0", text: "All Types" }
    ];

    const destinationOptions = [
        { value: "1", text: "Ha Long Bay" },
        { value: "2", text: "Da Nang" },
        { value: "3", text: "Ho Chi Minh City" },
        { value: "4", text: "Sapa" },
        { value: "5", text: "Phu Quoc" },
        { value: "0", text: "All Destinations" }
    ];

    const timeOptions = [
        { value: "1", text: "< 1 day" },
        { value: "2", text: "1 - 2 days" },
        { value: "3", text: "3 - 4 days" },
        { value: "4", text: "> 4 days" },
        { value: "0", text: "All Times" }
    ];

    const costOptions = [
        { value: "1", text: "Low" },
        { value: "2", text: "Middle" },
        { value: "3", text: "High" },
        { value: "0", text: "All Costs" }
    ];

    function updateSelectOptions(selectElement, options) {
        selectElement.innerHTML = "";

        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.text = opt.text;
            selectElement.appendChild(option);
        });
    }

    const regionSelect = document.querySelector('#underbotitem1 .underbotinputlist');
    const typeSelect = document.querySelector('#underbotitem2 .underbotinputlist');
    const destinationSelect = document.querySelector('#underbotitem3 .underbotinputlist');
    const timeSelect = document.querySelector('#underbotitem4 .underbotinputlist');
    const costSelect = document.querySelector('#underbotitem5 .underbotinputlist');

    updateSelectOptions(regionSelect, regionOptions);
    updateSelectOptions(typeSelect, typeOptions);
    updateSelectOptions(destinationSelect, destinationOptions);
    updateSelectOptions(timeSelect, timeOptions);
    updateSelectOptions(costSelect, costOptions);

    document.getElementById("underbotsearch").addEventListener("click", () => {
        const selectedRegion = regionSelect.value;
        const selectedType = typeSelect.value;
        const selectedDestination = destinationSelect.value;
        const selectedTime = timeSelect.value;
        const selectedCost = costSelect.value;

        const searchParams = `?region=${selectedRegion}&type=${selectedType}&destination=${selectedDestination}&time=${selectedTime}&cost=${selectedCost}`;
        console.log("Searching with parameters:", searchParams);

        window.location.href = `search.html${searchParams}`;
    });
};

function setupSearchFilters() {
    const regionFilter = document.querySelector('#underbotitem1 .underbotinputlist');
    const typeFilter = document.querySelector('#underbotitem2 .underbotinputlist');
    const timeFilter = document.querySelector('#underbotitem4 .underbotinputlist');
    const costFilter = document.querySelector('#underbotitem5 .underbotinputlist');

    document.getElementById("underbotsearch").addEventListener("click", () => {
        const selectedRegion = regionFilter.value;
        const selectedType = typeFilter.value;
        const selectedTime = timeFilter.value;
        const selectedCost = costFilter.value;

        const searchParams = `?region=${selectedRegion}&type=${selectedType}&time=${selectedTime}&cost=${selectedCost}`;
        console.log("Searching with parameters:", searchParams);

        loadContent('search.html' + searchParams, ['search.js'], ['search.css']);
    });
}

function applyFilters(region, type, time, reviews, cost) {
    const tourItems = document.querySelectorAll('.servicecost');
    const otherSuggestions = document.getElementById('other-suggestions');

    let unmatchedItems = [];

    tourItems.forEach(item => {
        const itemRegion = item.getAttribute('data-region');
        const itemType = item.getAttribute('data-type');
        const itemTime = item.getAttribute('data-time');
        const itemCost = item.getAttribute('data-cost');

        let matchesFilter = true;

        if (region !== '0' && itemRegion !== region) {
            item.style.display = 'none';
            return;
        }
        if (type !== '0' && itemType !== type) matchesFilter = false;
        if (time !== '0' && itemTime !== time) matchesFilter = false;
        if (cost !== '0' && itemCost !== cost) matchesFilter = false;

        if (matchesFilter) {
            item.style.display = 'grid';
        } else {
            unmatchedItems.push(item);
        }
    });

    if (unmatchedItems.length <= 2) {
        unmatchedItems.forEach(item => {
            otherSuggestions.appendChild(item);
            item.style.display = 'grid';
        });
    } else {
        unmatchedItems.forEach(item => {
            item.style.display = 'none';
        });
    }
}
document.getElementById("underbotsearch").addEventListener("click", () => {
    const selectedRegion = document.querySelector('#underbotitem1 .underbotinputlist').value;
    const selectedType = document.querySelector('#underbotitem2 .underbotinputlist').value;
    const selectedTime = document.querySelector('#underbotitem3 .underbotinputlist').value;
    const selectedCost = document.querySelector('#underbotitem4 .underbotinputlist').value;

    const searchParams = `?region=${selectedRegion}&type=${selectedType}&time=${selectedTime}&cost=${selectedCost}`;
    console.log("Searching with parameters:", searchParams);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `Search.html${searchParams}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const contentContainer = document.getElementById('content');
            contentContainer.innerHTML = xhr.responseText;

            // Chèn file CSS nếu chưa có
            addSearchCSS();

            reinitializeContent();
        }
    };
    xhr.send();
});

function addSearchCSS() {
    // Kiểm tra xem file CSS đã được thêm vào chưa
    if (!document.querySelector("link[href='Search.css']")) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "Search.css";
        document.head.appendChild(link);
        console.log("Search.css đã được thêm.");
    }
}

function reinitializeContent() {

    setupSearchFilters();
    initializeDateDropdown();
    reinitializeOldScripts();
    console.log("Content reinitialized.");
}

let timeout;

function resetTimer() {
    clearTimeout(timeout);

    timeout = setTimeout(Logoutt, 3000);
}

function Logoutt() {
    const loginElement = document.getElementById('login');
    const loginBack = document.getElementById('loginback');
    const navUserIcons = document.querySelectorAll('.navuser');
    loginBack.classList.remove('show');
    loginElement.classList.remove('show');
    loginBack.classList.add('hide');
    loginElement.classList.add('hide');
    isLoggedIn = false;
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navUserIcons.forEach(function (navUserIcon) {
        toggleMulticons('.multiconacc');
    });
    console.log("Đã logout do không có tương tác trong 3s.");
}


document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);
document.addEventListener('click', resetTimer);
document.addEventListener('scroll', resetTimer);
document.addEventListener('touchstart', resetTimer);

resetTimer();
