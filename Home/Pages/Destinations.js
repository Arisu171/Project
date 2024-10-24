document.addEventListener("DOMContentLoaded", function () {
    const destOpts = document.querySelectorAll(".destopt");
    const destCtrls = document.querySelectorAll(".destctrl");
    const destinationsZone = document.querySelector(".destinationszone");

    // Hàm để loại bỏ các lớp hiện tại và thêm lớp mới
    function changeActiveClass(elements, activeClass, index) {
        elements.forEach((el, idx) => {
            if (idx === index) {
                el.classList.add(activeClass);
            } else {
                el.classList.remove(activeClass);
            }
        });
    }

    // Hàm để thay đổi trang của destination zone
    function changeDestinationPage(index) {
        destinationsZone.className = `destinationszone destpage${index + 1}`;
    }

    // Hàm xử lý việc thay đổi trạng thái của destopt và destctrl cùng lúc
    function updateClasses(index) {
        changeActiveClass(destOpts, "destcurrent", index);
        changeActiveClass(destCtrls, "ctrlcurrent", index);
        changeDestinationPage(index);
    }

    // Xử lý sự kiện khi nhấn các nút destopt
    destOpts.forEach((opt, index) => {
        opt.addEventListener("click", () => {
            updateClasses(index);
        });
    });

    // Xử lý sự kiện khi nhấn các nút destctrl
    destCtrls.forEach((ctrl, index) => {
        ctrl.addEventListener("click", () => {
            updateClasses(index);
        });
    });
});
