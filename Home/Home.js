// Hàm tải nội dung trang Home
function loadHome() {
    clearPreviousResources(); // Xóa CSS và JS cũ
    loadContent('./Home.html', 'Home.js', ['./Home.css']);
}

// Hàm tải nội dung trang About Us
function loadAboutUs() {
    clearPreviousResources();
    loadContent('./Pages/About Us.html', 'About Us.js', ['./Pages/About Us.css']);
}

// Hàm tải nội dung trang Services
function loadServices() {
    clearPreviousResources();
    loadContent('./Pages/Services.html', 'Services.js', ['./Pages/Services.css']);
}

// Hàm tải nội dung trang Contact Us
function loadContact() {
    clearPreviousResources();
    loadContent('./Pages/Contact Us.html', 'Contact Us.js', ['./Pages/Contact Us.css']);
}

// Hàm tải nội dung trang Destinations
function loadDestinations() {
    clearPreviousResources();
    loadContent('./Pages/Destinations.html', 'Destinations.js', ['./Pages/Destinations.css']);
}

// Hàm tải nội dung trang Tourist
function loadTourist() {
    clearPreviousResources();
    loadContent('./Tourist/Tourist.html', 'Tourist.js', ['./Tourist/Tourist.css']);
}

// Hàm tải nội dung trang Regions
function loadRegions() {
    clearPreviousResources();
    loadContent('./Regions/Regions.html', 'Regions.js', ['./Regions/Regions.css']);
}

// Hàm tải nội dung trang Car Rental
function loadCarRental() {
    clearPreviousResources();
    loadContent('./Transport/Carental.html', 'Carental.js', ['./Transport/Carental.css']);
}

// Hàm tải nội dung trang Bus Shuttle
function loadBusShuttle() {
    clearPreviousResources();
    loadContent('./Transport/BusShuttle.html', 'BusShuttle.js', ['./Transport/BusShuttle.css']);
}

// Hàm tải nội dung trang Airport Trans
function loadAirportTrans() {
    clearPreviousResources();
    loadContent('./Transport/AirportTrans.html', 'AirportTrans.js', ['./Transport/AirportTrans.css']);
}

// Hàm tải nội dung trang Blog
function loadBlog() {
    clearPreviousResources();
    loadContent('./Blog/Blog.html', 'Blog.js', ['./Blog/Blog.css']);
}

// Hàm tải nội dung trang Account
function loadAccount() {
    clearPreviousResources();
    loadContent('./Account/Register.html', 'Register.js', ['./Account/Register.css']);
}

// Hàm tổng quát để tải nội dung từ các tệp khác
function loadContent(htmlFile, jsFile, cssFiles = []) {
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

                addResources(cssFiles, jsFile).then(() => {
                    reinitializeOldScripts();
                });
            }
        }
    };
    xhr.send();
}

// Hàm thêm CSS và tải JavaScript
function addResources(cssFiles, jsFile) {
    return new Promise((resolve) => {
        let promises = [];
        if (cssFiles && cssFiles.length > 0) {
            cssFiles.forEach((cssFile) => {
                promises.push(addCSS(cssFile));
            });
        }
        if (jsFile) {
            promises.push(loadScripts([jsFile]));
        }

        Promise.all(promises).then(() => {
            resolve();
        });
    });
}

// Hàm xóa các tệp CSS và JS đã được tải từ trước đó
function clearPreviousResources() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        if (!link.href.includes('main.css')) { // Giữ lại CSS trang chủ
            link.remove();
        }
    });

    document.querySelectorAll('script').forEach((script) => {
        if (!script.src.includes('main.js')) { // Giữ lại JS trang chủ
            script.remove();
        }
    });
}

// Hàm thêm tệp CSS
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
