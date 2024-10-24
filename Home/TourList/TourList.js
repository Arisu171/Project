function uptobody() {
    const destCtrls = document.querySelectorAll(".destctrl");
    const destinationsZone = document.querySelector(".servicezone");

    function changeActiveClass(elements, activeClass, index) {
        elements.forEach((el, idx) => {
            if (idx === index) {
                el.classList.add(activeClass);
            } else {
                el.classList.remove(activeClass);
            }
        });
    }

    function changeDestinationPage(index) {
        destinationsZone.className = `contentzone servicezone servicepage${index + 1}`;
    }

    function updateClasses(index) {
        changeActiveClass(destCtrls, "ctrlcurrent", index);
        changeDestinationPage(index);
    }

    destCtrls.forEach((ctrl, index) => {
        ctrl.addEventListener("click", () => {
            updateClasses(index);
        });
    });
    setTimeout(function () {
        window.location.href = "#port";
    }, 1000);
};

document.querySelectorAll('.detailbutt').forEach(detailButton => {
    detailButton.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

        const img = this.closest('.servicecost').querySelector('img');
        if (img) {
            // Lấy tên ảnh và loại bỏ phần mở rộng .png
            const imgName = img.getAttribute('src').split('.')[0];
            const baseName = imgName.replace('Cost', '');
            const functionName = `load${baseName}`;

            // Gọi hàm JavaScript tương ứng nếu tồn tại
            if (typeof window[functionName] === "function") {
                window[functionName]();
            } else {
                console.log(`Function ${functionName} does not exist`);
            }
        }
    });
});
