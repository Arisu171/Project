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

//show list//
function shownav() {
    if (!dragging) {
        const elements = document.querySelectorAll('.navhide');
        const multicons = document.querySelectorAll('.multicon');
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
                }, 1000);
            }
        });
    }
}

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

// Gắn sự kiện resize vào window
window.addEventListener('resize', checkScreenSize);

makeElementDraggable(document.getElementById("navbutt"));

// Hàm để theo dõi thay đổi class
function observeClassChanges(targetElement, classToRemove, affectedElementsSelector, classToRemoveFromAffected, classToAddFromAffected) {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === "class") {
                const currentClassList = mutation.target.classList;
                // Kiểm tra nếu class `classToRemove` đã bị gỡ
                if (!currentClassList.contains(classToRemove)) {
                    // Lấy tất cả các thẻ có selector `affectedElementsSelector`
                    const affectedElements = document.querySelectorAll(affectedElementsSelector);

                    // Duyệt qua từng thẻ và gỡ/thêm class tương ứng
                    affectedElements.forEach(function (affectedElement) {
                        affectedElement.classList.remove(classToRemoveFromAffected);
                        affectedElement.classList.add(classToAddFromAffected);
                    });
                }
            }
        });
    });

    // Cấu hình observer
    observer.observe(targetElement, { attributes: true });
}

// Lấy thẻ chỉ có class 'navradius' để theo dõi
const elementToWatch = document.querySelector('.navradius');

// Kích hoạt theo dõi thay đổi class
observeClassChanges(elementToWatch, 'show', '.multicon', 'show', 'hide');

//show multicon//
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
