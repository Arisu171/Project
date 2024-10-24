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
