window.onload = function () {
    var navigationbar = document.getElementById('navigationbar');
    var pagefooter = document.getElementById('pagefooter');

    if (navigationbar) {
        navigationbar.innerHTML = `
        <div id="shadow"></div>
        <div class="navbar">
            <div class="navleft"><a href="#bannerimg1"></a></div>
            <div class="navright" id="navright">
                <div class="navtitle navbarcurrent" id="navbarHome"><a href="#">Home</a></div>
                <div class="navtitle" id="navbarPages">
                    <a href="#" class="navdroptitle">Pages</a>
                    <div class="navdroplist">
                        <a href="#">List 1</a>
                        <a href="#">List 2</a>
                        <a href="#">List 3</a>
                    </div>
                </div>
                <a href="#" class="navtitle" id="navbarTourist">Tourist</a>
                <a href="#" class="navtitle" id="navbarRegions">Regions</a>
                <div class="navtitle">
                    <a href="#" class="navdroptitle">Transportations</a>
                    <div class="navdroplist">
                        <a href="#">List 1</a>
                        <a href="#">List 2</a>
                        <a href="#">List 3</a>
                    </div>
                </div>
                <a href="#" class="navtitle" id="navbarBlog">Blog</a>
                <a href="#" class="navuser"><i class="fa fa-user"></i></a>
            </div>
            <div class="navbutton navradius navhide hide" id="navbutt">
                <div class="navicon navhide" id="navicon" onclick="shownav()"><i class="fa-solid fa-bars"></i></div>
                <div class="navitem navhide">
                    <a href="#bannerimg1">
                        <i class="fa-solid fa-house"></i>
                        <div class="navitcap">Home</div>
                    </a>
                </div>
                <div class="navitem navhide" id="Pages">
                    <div>
                        <i class="fa-solid fa-users"></i>
                        <div class="navitcap">Pages</div>
                    </div>
                    <a href="#" class="multicon multiconpage hide" id="multicon2">List 2</a>
                    <a href="#" class="multicon multiconpage hide" id="multicon4">List 4</a>
                </div>
                <div class="navitem navhide">
                    <a href="#">
                        <i class="fa-solid fa-calendar-days"></i>
                        <div class="navitcap">Tourist</div>
                    </a>
                </div>
                <div class="navitem navhide">
                    <a href="#">
                        <i class="fa-solid fa-globe"></i>
                        <div class="navitcap">Regions</div>
                    </a>
                </div>
                <div class="navitem navhide" id="Transpos">
                    <div>
                        <i class="fa-solid fa-bus"></i>
                        <div class="navitcap">Transpos</div>
                    </div>
                    <a href="#" class="multicon multicontran hide" id="multicon1">List 1</a>
                    <a href="#" class="multicon multicontran hide" id="multicon3">List 3</a>
                    <a href="#" class="multicon multicontran hide" id="multicon5">List 5</a>
                </div>
                <div class="navitem navhide">
                    <a href="#">
                        <i class="fa-brands fa-squarespace"></i>
                        <div class="navitcap">Blog</div>
                    </a>
                </div>
                <a href="#" class="navuser navhide"><i class="fa fa-user"></i></a>
            </div>
        </div>
        `;

        // Gán lại tất cả các sự kiện sau khi cập nhật nội dung
        attachEventHandlers();
    }

    if (pagefooter) {
        pagefooter.innerHTML = `
        <div class="footercontent">
            <div class="footerpart" id="footerabout">
                <h3 class="footertitle">FLARISTA</h3>
                <div class="footertext">Discover Vietnam with exclusive deals and exceptional service.</div>
            </div>
            <div class="footerpart" id="footerdestination">
                <h3 class="footertitle">TOP DESTINATIONS</h3>
                <div class="footerimg">
                    <img src="https://arisu171.github.io/Project/General/Footer/img1.png" alt="">
                    <img src="https://arisu171.github.io/Project/General/Footer/img2.png" alt="">
                    <img src="https://arisu171.github.io/Project/General/Footer/img3.png" alt="">
                    <img src="https://arisu171.github.io/Project/General/Footer/img4.png" alt="">
                    <img src="https://arisu171.github.io/Project/General/Footer/img5.png" alt="">
                    <img src="https://arisu171.github.io/Project/General/Footer/img6.png" alt="">
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
    }
};

// Hàm để gắn lại tất cả các sự kiện và chức năng
function attachEventHandlers() {
    // Gán lại sự kiện kéo thả
    makeElementDraggable(document.getElementById("navbutt"));

    // Gán sự kiện cho các nút Pages
    document.querySelector('#Pages div i').parentElement.addEventListener('click', function () {
        const multicons = document.querySelectorAll('.multiconpage');
        multicons.forEach(function (multiconpage) {
            const newClass = multiconpage.id;
            if (multiconpage.classList.contains('show')) {
                multiconpage.classList.remove('show');
                multiconpage.classList.add('hide');
                multiconpage.classList.remove(newClass);
            } else {
                multiconpage.classList.add('show');
                multiconpage.classList.remove('hide');
                multiconpage.classList.add(newClass);
            }
        });
    });

    // Gán sự kiện cho các nút Transpos
    document.querySelector('#Transpos div i').parentElement.addEventListener('click', function () {
        const multicons = document.querySelectorAll('.multicontran');
        multicons.forEach(function (multicontran) {
            const newClass = multicontran.id;
            if (multicontran.classList.contains('show')) {
                multicontran.classList.remove('show');
                multicontran.classList.add('hide');
                multicontran.classList.remove(newClass);
            } else {
                multicontran.classList.add('show');
                multicontran.classList.remove('hide');
                multicontran.classList.add(newClass);
            }
        });
    });

    // Hàm kiểm tra kích thước màn hình
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
    window.addEventListener('resize', checkScreenSize);

    // Gắn chức năng quan sát thay đổi class
    const elementToWatch = document.querySelector('.navradius');
    observeClassChanges(elementToWatch, 'show', '.multicon', 'show', 'hide');
}

// Các hàm phụ trợ
let dragging = false;

function makeElementDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        dragging = false;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        dragging = true;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;

        const currentY = el.offsetTop;
        const windowHeight = window.innerHeight;
        let newY = currentY;

        if (currentY < 1) {
            newY = 1;
        } else if (currentY > (windowHeight - el.offsetHeight - 1)) {
            newY = windowHeight - el.offsetHeight - 1;
        }

        const windowWidth = window.innerWidth;
        const currentX = el.offsetLeft;
        let newX;

        if (currentX < (windowWidth / 2)) {
            newX = 1;
        } else {
            newX = windowWidth - el.offsetWidth - 1;
        }

        setTimeout(() => {
            el.style.left = newX + "px";
            el.style.top = newY + "px";
            dragging = false;
        }, 100);
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
