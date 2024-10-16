window.onload = function () {
    var navigationbar = document.getElementById('navigationbar');
    var pagefooter = document.getElementById('pagefooter');

    if (navigationbar) {
        navigationbar.innerHTML = `
        <div id="shadow"></div>
        <div class="navbar">
            <div class="navleft"><a href="#bannerimg1"></a></div>
            <div class="navright" id="navright">
                <div class="navtitle"><a href="#bannerimg1">Home</a></div>
                <div class="navdrop">
                    <div class="navtitle">Pages
                        <div class="navdroplist"></div>
                    </div>
                </div>
                <div class="navtitle">Tourist</div>
                <div class="navtitle">Regions</div>
                <div class="navdrop">
                    <div class="navtitle">Transportations
                        <div class="navdroplist"></div>
                    </div>
                </div>
                <div class="navtitle">Blog</div>
                <div class="navuser"><i class="fa fa-user"></i></div>
            </div>
            <div class="navbutton navradius navhide hide" id="navbutt" onclick="shownav()">
                <div class="navicon navhide" id="navicon"><i class="fa-solid fa-bars"></i></div>
                <div class="navitem navhide">
                    <a href="#bannerimg1">
                        <i class="fa-solid fa-house"></i>
                        <div class="navitcap">Home</div>
                    </a>
                </div>
                <div class="navitem navhide">
                    <i class="fa-solid fa-users"></i>
                    <div class="navitcap">Pages</div>
                </div>
                <div class="navitem navhide">
                    <i class="fa-solid fa-calendar-days"></i>
                    <div class="navitcap">Tourist</div>
                </div>
                <div class="navitem navhide">
                    <i class="fa-solid fa-globe"></i>
                    <div class="navitcap">Regions</div>
                </div>
                <div class="navitem navhide">
                    <i class="fa-solid fa-bus"></i>
                    <div class="navitcap">Transpos</div>
                </div>
                <div class="navitem navhide">
                    <i class="fa-brands fa-squarespace"></i>
                    <div class="navitcap">Blog</div>
                </div>
                <div class="navuser navhide"><i class="fa fa-user"></i></div>
            </div>
        </div>
        `;

        // Gán lại sự kiện kéo thả cho nút #navbutt sau khi innerHTML
        makeElementDraggable(document.getElementById("navbutt"));
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

// Move the nav and button click logic inside window.onload
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
            d
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

//hiển thị list khi click
function shownav() {
    if (!dragging) {
        const elements = document.querySelectorAll('.navhide');
        elements.forEach(function (element) {
            if (element.classList.contains('show')) {
                element.classList.remove('show');
                element.classList.add('hide');
            } else {
                element.classList.add('show');
                element.classList.remove('hide');
            }
        });
    }
}

makeElementDraggable(document.getElementById("navbutt"));
