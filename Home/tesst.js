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


// Lấy kích thước màn hình thiết bị
let chieuRong = window.screen.width;
let chieuCao = window.screen.height;
// Tính giá trị 1/1080 chiều cao
let motPhanChieuCao = chieuCao / 1080;
let motPhanChieuRong = chieuRong / 1920;
// Gán giá trị cho custom properties trong CSS
document.documentElement.style.setProperty('--wid', chieuRong + 'px');
document.documentElement.style.setProperty('--hig', chieuCao + 'px');

// Gán giá trị cho biến CSS --phan-chieu-cao
document.documentElement.style.setProperty('--pix', motPhanChieuCao + 'px');
document.documentElement.style.setProperty('--pot', motPhanChieuRong + 'px');

function updateCSSVariable() {
    const bodywidth = document.body.offsetWidth;
    const dynamicHeight = bodywidth / 1920 + 'px';
    document.documentElement.style.setProperty('--pixe', dynamicHeight);
    updateCSSVariable();
    window.addEventListener('resize', updateCSSVariable);
}