window.onload = function () {

    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedNickname = localStorage.getItem("nickname");

    attachEventHandlers(); // Gắn các sự kiện cần thiết

    const loginButton = document.getElementById('loginbutton');
    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

<<<<<<< Updated upstream
=======
    function setNavigationBar() {
        var navigationbar = document.getElementById('navigationbar');
        if (navigationbar) {
            navigationbar.innerHTML = `
        <div id="shadow"></div>
        <div class="navbar">
            <div class="navleft"><a href="#bannerimg1"></a></div>
            <div class="navright" id="navright">
                <div class="navtitle" id="navbarHome"><a
                        href="https://arisu171.github.io/Project/Home/Home.html">Home</a></div>
                <div class="navtitle" id="navbarPages">
                    <a href="#" class="navdroptitle">Pages</a>
                    <div class="navdroplist">
                        <a href="https://arisu171.github.io/Project/Home/Pages/About Us.html">About Us</a>
                        <a href="https://arisu171.github.io/Project/Home/Pages/Our Services.html">Our Services</a>
                        <a href="https://arisu171.github.io/Project/Home/Pages/Contact.html">Contact Us</a>
                        <a href="https://arisu171.github.io/Project/Home/Pages/Destinations.html">Destinations</a>
                    </div>
                </div>
                <a href="https://arisu171.github.io/Project/Home/TourList/TourList.html" class="navtitle"
                    id="navbarTourist">Tourist</a>
                <a href="https://arisu171.github.io/Project/Home/Regions/Regions.html" class="navtitle"
                    id="navbarRegions">Regions</a>
                <div class="navtitle" id="navbarTrans">
                    <a href="#" class="navdroptitle">Transportations</a>
                    <div class="navdroplist">
                        <a href="https://arisu171.github.io/Project/Home/Transport/Car.html">Car Rental</a>
                        <a href="https://arisu171.github.io/Project/Home/Transport/Coach.html">Bus Shuttle</a>
                        <a href="https://arisu171.github.io/Project/Home/Transport/Airport.html">Airpot Trans</a>
                    </div>
                </div>
                <a href="https://arisu171.github.io/Project/Home/Blog/Blog.html" class="navtitle"
                    id="navbarBlog">Blog</a>
                <div class="navusers">
                    <div class="navuser">
                        <i class="fa fa-user"></i>
                    </div>
                    <a href="#navuser" class="multicon multiconacc hide" id="multiconbar1">
                        <div>Account</div>
                    </a>
                    <a href="#navuser" class="multicon multiconacc hide out" id="multiconbar2">
                        <div>Log Out</div>
                    </a>
                </div>
            </div>
        </div>
        <div class="navbutton navradius navhide hide" id="navbutt">
            <div class="navicon navhide" id="navicon" onclick="shownav()"><i class="fa-solid fa-bars"></i></div>
            <div class="navitem navhide">
                <a href="">
                    <i class="fa-solid fa-house"></i>
                    <div class="navitcap">Home</div>
                </a>
            </div>
            <div class="navitem navhide" id="Pages">
                <div>
                    <i class="fa-solid fa-users"></i>
                    <div class="navitcap">Pages</div>
                </div>
                <a href="https://arisu171.github.io/Project/Home/Pages/About Us.html" class="multicon multiconpage hide"
                    id="rmulticon0">
                    <div>About</div>
                </a>
                <a href="https://arisu171.github.io/Project/Home/Pages/Our Services.html"
                    class="multicon multiconpage hide" id="rmulticon2">
                    <div>Services</div>
                </a>
                <a href="https://arisu171.github.io/Project/Home/Pages/Contact.html" class="multicon multiconpage hide"
                    id="rmulticon4">
                    <div>Contact</div>
                </a>
                <a href="https://arisu171.github.io/Project/Home/Pages/Destinations.html"
                    class="multicon multiconpage hide" id="rmulticon6">
                    <div>Dests</div>
                </a>
            </div>
            <div class="navitem navhide">
                <a href="https://arisu171.github.io/Project/Home/TourList/TourList.html">
                    <i class="fa-solid fa-calendar-days"></i>
                    <div class="navitcap">Tourist</div>
                </a>
            </div>
            <div class="navitem navhide">
                <a href="https://arisu171.github.io/Project/Home/Regions/Regions.html">
                    <i class="fa-solid fa-globe"></i>
                    <div class="navitcap">Regions</div>
                </a>
            </div>
            <div class="navitem navhide" id="Transpos">
                <div>
                    <i class="fa-solid fa-bus"></i>
                    <div class="navitcap">Transpos</div>
                </div>
                <a href="https://arisu171.github.io/Project/Home/Transport/Car.html" class="multicon multicontran hide"
                    id="rmulticon1">
                    <div>Car</div>
                </a>
                <a href="https://arisu171.github.io/Project/Home/Transport/Coach.html"
                    class="multicon multicontran hide" id="rmulticon3">
                    <div>Bus</div>
                </a>
                <a href="https://arisu171.github.io/Project/Home/Transport/Airport.html"
                    class="multicon multicontran hide" id="rmulticon5">
                    <div>Airport</div>
                </a>
            </div>
            <div class="navitem navhide">
                <a href="https://arisu171.github.io/Project/Home/Blog/Blog.html">
                    <i class="fa-brands fa-squarespace"></i>
                    <div class="navitcap">Blog</div>
                </a>
            </div>
            <div class="navusers">
                <div class="navuser navitem navhide" id="navuser">
                    <i class="fa fa-user"></i>
                </div>
                <a href="#navuser" class="multicon multiconacc hide" id="rmulticon7">
                    <i class="fa-duotone fa-solid fa-user"></i>
                </a>
                <a href="#navuser" class="multicon multiconacc hide out" id="rmulticon8">
                    <i class="fa-duotone fa-solid fa-right-from-bracket"></i>
                </a>
            </div>
        </div>`;
        }
    }

    function setPageFooter() {
        var pagefooter = document.getElementById('pagefooter');
        if (pagefooter) {
            pagefooter.innerHTML = `
        <div id="loginback" class="hide"></div> 
        <div class="login hide" id="login">
            <div class="loginzone">
                <div class="logintitle">SIGN IN</div>
                <label for="nickname">Username or Email</label>
                <input type="text" class="nickname" id="nickname">
                <label for="password">Password</label>
                <input type="password" class="password" id="password">
                <div class="passforgot">Forgot Password?</div>
                <div class="loginbutton" id="loginbutton">SIGN IN</div>
                <a href="https://arisu171.github.io/Project/Home/Account/Register.html" class="registerlink">
                    <div>DO NOT HAVE AN ACCOUNT?</div>
                    <div>CREATE AN ACCOUNT</div>
                </a>
            </div>
        </div>
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
    }

>>>>>>> Stashed changes
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
