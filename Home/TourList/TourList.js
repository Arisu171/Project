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

document.querySelectorAll('.servicecost').forEach(service => {
    const img = service.querySelector('img');
    const detailButton = service.querySelector('.detailbutt');

    if (img && detailButton) {

        const imgName = img.getAttribute('src').split('.')[0];
        const baseName = imgName.replace('Cost', '');
        const functionName = `load${baseName}`;

        detailButton.addEventListener('click', function (event) {
            event.preventDefault();

            if (typeof window[functionName] === "function") {
                window[functionName]();
            }

            const href = detailButton.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    }
});