const navbut = document.getElementById('navicon');
const button = document.getElementById('navbutt');
const main = document.getElementById('main');

// Đảm bảo sự kiện chỉ chạy khi trang đã được tải hoàn toàn
window.onload = function() {
    // Lấy phần tử có id là 'content'
    var navigationbar = document.getElementById('navigationbar');
    
    // Chèn nội dung HTML vào phần tử
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
};
// Thêm class khi click chuột
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
    // Kiểm tra nếu chiều rộng màn hình nhỏ hơn 768px
    if (window.innerWidth > 665) {
        button.classList.remove('navcol');
        main.classList.remove('main1');
        button.classList.add('navradius');
        main.classList.add('main0');
    }
}

// Gọi hàm khi người dùng thay đổi kích thước cửa sổ
window.addEventListener('resize', handleResize);

// Kiểm tra kích thước ban đầu của màn hình khi tải trang
handleResize();