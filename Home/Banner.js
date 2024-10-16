

let currentBanner = 5;
let isTransitioning = false;
const totalBanners = document.querySelectorAll('.bannerimg').length;
let autoSlideInterval;

window.addEventListener('load', () => {
    updateDots();
    document.querySelectorAll('.bannerimg').forEach((banner, index) => {
        banner.classList.add(`bannerimg${index + 1}`);
    });
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 1000);
    startAutoSlide(); // Khởi chạy banner tự động
});

function startAutoSlide() {
    // Xóa khoảng thời gian hiện tại nếu có
    clearInterval(autoSlideInterval);
    // Tạo một setInterval mới cho banner tự chạy
    autoSlideInterval = setInterval(next, 5000);
}

function updateDots() {
    let dots = document.querySelectorAll('.bannercurrent div i');
    dots.forEach((dot, index) => {
        if (index + 1 === currentBanner) {
            dot.classList.remove('fa-regular');
            dot.classList.add('fa-solid');
        } else {
            dot.classList.remove('fa-solid');
            dot.classList.add('fa-regular');
        }
    });
}

function next() {
    if (isTransitioning) return;
    isTransitioning = true;
    let banners = document.querySelectorAll('.bannerimg');
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = currentNumber < totalBanners ? currentNumber + 1 : 1;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });
    currentBanner = currentBanner < totalBanners ? currentBanner + 1 : 1;
    updateDots();
    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}

function prev() {
    if (isTransitioning) return;
    isTransitioning = true;

    let banners = document.querySelectorAll('.bannerimg');
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = currentNumber > 1 ? currentNumber - 1 : totalBanners;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });
    currentBanner = currentBanner > 1 ? currentBanner - 1 : totalBanners;
    updateDots();
    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}

function goToBanner(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    let banners = document.querySelectorAll('.bannerimg');
    let difference = currentBanner - index;
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = (currentNumber - difference + totalBanners) % totalBanners || totalBanners;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });

    currentBanner = index;
    updateDots();

    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}

// Khi người dùng nhấn vào nút hoặc dot, reset lại auto slide
document.querySelectorAll('.bannercurrent div').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToBanner(index + 1);
        startAutoSlide(); // Reset lại auto slide
    });
});

// Gọi updateDots() lần đầu tiên để cập nhật icon ban đầu
updateDots();
setTimeout(() => {
    next();
    startAutoSlide(); // Khởi chạy banner tự động sau lần đầu
}, 500);


document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        console.log("Đã ngăn Ctrl + U");
    }
});

let originalContent = document.getElementById('homebanner').innerHTML;
setInterval(function () {
    const replace = document.getElementById('homebanner');
    if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
        replace.innerHTML = '';
    } else {
        if (replace.innerHTML === '') {
            replace.innerHTML = originalContent;
        }
    }
}, 1000);


document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' ||
        ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') ||
        ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'J') ||
        ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') ||
        ((event.ctrlKey || event.metaKey) && event.key === 'U')) {
        event.preventDefault();
        console.log("Đã ngăn Devtool");
    }
});

document.addEventListener('copy', function (event) {
    event.preventDefault();
    console.log("Coppy Failed Successful !!!");
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log("Rai cờ líc đít sa bờ lẹt");
});

// Mã hóa với AES
function encryptData(data) {
    var key = CryptoJS.enc.Utf8.parse('1234567890123456'); // Khóa bí mật (16 bytes cho AES-128)
    var iv = CryptoJS.enc.Utf8.parse('1234567890123456');  // IV (16 bytes)

    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
}

var encryptedData = encryptData('Dữ liệu nhạy cảm');
console.log("Dữ liệu đã mã hóa: " + encryptedData);


var encryptedData = encryptData('Dữ liệu nhạy cảm');
console.log(encryptedData);
(function () {
    const threshold = 160;
    let devtools = false;

    const detectDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            if (!devtools) {
                devtools = true;
                console.log('DevTools được mở');
            }
        } else {
            devtools = false;
        }
    };

    window.addEventListener('resize', detectDevTools);
    detectDevTools();
})();