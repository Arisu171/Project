const navbut = document.getElementById('navicon');
const button = document.getElementById('navbutt');
const main = document.getElementById('main');

window.onload = function () {
    var navigationbar = document.getElementById('navigationbar');

    navigationbar.innerHTML = `
    <div id="shadow"></div>
    <div class="navbar">
        <div class="navleft"><a href="#bannerimg1"></a></div>
        <div class="navright" id="navright">
            <div class="navtitle"><a href="#bannerimg1">Home</a></div>
            <div class="navdrop">
                <div class="navtitle">Pages
                    <div class="navdroplist">
                        <!-- <div class="navli">About Us</div>
                        <div class="navli">Contact Us</div> -->
                    </div>
                </div>
            </div>
            <div class="navtitle">Tourist</div>
            <div class="navtitle">Regions</div>
            <div class="navdrop">
                <div class="navtitle">Transportations
                    <div class="navdroplist">
                        <!-- <div class="navli">Airport Transport</div>
                        <div class="navli">Bus and Shuttle</div>
                        <div class="navli">Car Rental</div> -->
                    </div>
                </div>
            </div>
            <div class="navtitle">Blog</div>
            <div class="navuser"><i class="fa fa-user"></i></div>
        </div>
        <div class="navbutton navradius" id="navbutt">
            <div class="navicon" id="navicon"><i class="fa-solid fa-bars"></i></div>
            <div class="navitem">
                <a href="#bannerimg1">
                    <i class="fa-solid fa-house"></i>
                    <div class="navitcap">Home</div>
                </a>
            </div>
            <div class="navitem">
                <i class="fa-solid fa-users"></i>
                <div class="navitcap">Pages</div>
            </div>
            <div class="navitem">
                <i class="fa-solid fa-calendar-days"></i>
                <div class="navitcap">Tourist</div>
            </div>
            <div class="navitem">
                <i class="fa-solid fa-globe"></i>
                <div class="navitcap">Regions</div>
            </div>
            <div class="navitem">
                <i class="fa-solid fa-bus"></i>
                <div class="navitcap">Transpos</div>
            </div>
            <div class="navitem">
                <i class="fa-brands fa-squarespace"></i>
                <div class="navitcap">Blog</div>
            </div>
            <div class="navuser"><i class="fa fa-user"></i></div>
        </div>
    </div>
    `;

    var pagefooter = document.getElementById('pagefooter');

    pagefooter.innerHTML = ` <div class="footercontent">
            <div class="footerpart" id="footerabout">
                <h3 class="footertitle">FLARISTA</h3>
                <div class="footertext">Discover Vietnam with exclusive deals and exceptional service.</div>
            </div>
            <div class="footerpart" id="footerdestination">
                <h3 class="footertitle">TOP DESTINATIONS</h3>
                <div class="footerimg">
                    <img src="img1.png" alt="">
                    <img src="img2.png" alt="">
                    <img src="img3.png" alt="">
                    <img src="img4.png" alt="">
                    <img src="img5.png" alt="">
                    <img src="img6.png" alt="">
                </div>
            </div>
            <div class="footerpart" id="footercontact">
                <h3 class="footertitle">CONTACT INFO</h3>
                <div class="footertext">
                    <p>Address: 21 Hoan Kiem Street - Ha Noi</p>
                    <p>Phone: +84 6868 888</p>
                    <p>Contact: FlaristaTravel@gmail.com</p>
                </div>
                <div id="footericon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
        <div id="copyright">© Copyright 2024 – Flarista Travel</div>`;
};

navbut.addEventListener('click', function () {
    if (button.classList.contains('navcol')) {
        button.classList.remove('navcol');
        main.classList.remove('main1');
        button.classList.add('navradius');
        main.classList.add('main0');
    } else {
        button.classList.remove('navradius');
        main.classList.remove('main0');
        button.classList.add('navcol');
        main.classList.add('main1');
    }
});

function handleResize() {

    if (window.innerWidth > 665) {
        button.classList.remove('navcol');
        main.classList.remove('main1');
        button.classList.add('navradius');
        main.classList.add('main0');
    }
}


window.addEventListener('resize', handleResize);
handleResize();


// document.addEventListener('keydown', function (e) {
//     if (e.ctrlKey && e.key === 'u') {
//         e.preventDefault();
//         console.log("Đã ngăn Ctrl + U");
//     }
// });

// let originalContent = document.getElementById('homebanner').innerHTML;
// setInterval(function () {
//     const replace = document.getElementById('homebanner');
//     if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
//         replace.innerHTML = '';
//     } else {
//         if (replace.innerHTML === '') {
//             replace.innerHTML = originalContent;
//         }
//     }
// }, 1000);


// document.addEventListener('keydown', function (event) {
//     if (event.key === 'F12' ||
//         ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') ||
//         ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'J') ||
//         ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') ||
//         ((event.ctrlKey || event.metaKey) && event.key === 'U')) {
//         event.preventDefault();
//         console.log("Đã ngăn Devtool");
//     }
// });

// document.addEventListener('copy', function (event) {
//     event.preventDefault();
//     console.log("Coppy Failed Successful !!!");
// });

// document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
//     console.log("Rai cờ líc đít sa bờ lẹt");
// });

// // Mã hóa với AES
// function encryptData(data) {
//     var key = CryptoJS.enc.Utf8.parse('1234567890123456'); // Khóa bí mật (16 bytes cho AES-128)
//     var iv = CryptoJS.enc.Utf8.parse('1234567890123456');  // IV (16 bytes)

//     var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key, {
//         keySize: 128 / 8,
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7
//     });

//     return encrypted.toString();
// }

// var encryptedData = encryptData('Dữ liệu nhạy cảm');
// console.log("Dữ liệu đã mã hóa: " + encryptedData);


// var encryptedData = encryptData('Dữ liệu nhạy cảm');
// console.log(encryptedData);
// (function () {
//     const threshold = 160;
//     let devtools = false;

//     const detectDevTools = () => {
//         const widthThreshold = window.outerWidth - window.innerWidth > threshold;
//         const heightThreshold = window.outerHeight - window.innerHeight > threshold;
//         if (widthThreshold || heightThreshold) {
//             if (!devtools) {
//                 devtools = true;
//                 console.log('DevTools được mở');
//             }
//         } else {
//             devtools = false;
//         }
//     };

//     window.addEventListener('resize', detectDevTools);
//     detectDevTools();
// })();