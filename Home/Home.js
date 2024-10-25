let currentBanner = 5;
let isTransitioning = false;
const totalBanners = document.querySelectorAll('.bannerimg').length;
let autoSlideInterval;

document.addEventListener('DOMContentLoaded', () => {
    console.log("Document is ready. Total banners:", totalBanners);
    updateDots();
    document.querySelectorAll('.bannerimg').forEach((banner, index) => {
        banner.classList.add(`bannerimg${index + 1}`);
    });
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 1000);
    startAutoSlide();
});

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(next, 5000);
}

function updateDots() {
    let dots = document.querySelectorAll('.bannercurrent div i');
    console.log("Updating dots:", dots);
    dots.forEach((dot, index) => {
        if (index + 1 === currentBanner) {
            dot.classList.remove('fa-regular');
            dot.classList.add('fa-solid');
        } else {
            dot.classList.remove('fa-solid');
            dot.classList.add('fa-regular');
        }
    });
}

function next() {
    if (isTransitioning) return;
    isTransitioning = true;
    let banners = document.querySelectorAll('.bannerimg');
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = currentNumber < totalBanners ? currentNumber + 1 : 1;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });
    currentBanner = currentBanner < totalBanners ? currentBanner + 1 : 1;
    updateDots();
    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}

function prev() {
    if (isTransitioning) return;
    isTransitioning = true;

    let banners = document.querySelectorAll('.bannerimg');
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = currentNumber > 1 ? currentNumber - 1 : totalBanners;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });
    currentBanner = currentBanner > 1 ? currentBanner - 1 : totalBanners;
    updateDots();
    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}

function goToBanner(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    console.log("Navigating to banner:", index);

    let banners = document.querySelectorAll('.bannerimg');
    let difference = currentBanner - index;
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = (currentNumber - difference + totalBanners) % totalBanners || totalBanners;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });

    currentBanner = index;
    updateDots();

    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
    const regionOptions = [
        { value: "1", text: "Northern Region" },
        { value: "2", text: "Southern Region" },
        { value: "3", text: "Central Region" },
        { value: "4", text: "Central Highland" },
        { value: "0", text: "All Regions" }
    ];

    const typeOptions = [
        { value: "1", text: "Beach" },
        { value: "2", text: "City" },
        { value: "3", text: "Nature" },
        { value: "4", text: "Outdoor" },
        { value: "0", text: "All Types" }
    ];

    const destinationOptions = [
        { value: "1", text: "Ha Long Bay" },
        { value: "2", text: "Da Nang" },
        { value: "3", text: "Ho Chi Minh City" },
        { value: "4", text: "Sapa" },
        { value: "5", text: "Phu Quoc" },
        { value: "0", text: "All Destinations" }
    ];

    const timeOptions = [
        { value: "1", text: "< 1 day" },
        { value: "2", text: "1 - 2 days" },
        { value: "3", text: "3 - 4 days" },
        { value: "4", text: "> 4 days" },
        { value: "0", text: "All Times" }
    ];

    const costOptions = [
        { value: "1", text: "Low" },
        { value: "2", text: "Middle" },
        { value: "3", text: "High" },
        { value: "0", text: "All Costs" }
    ];

    function updateSelectOptions(selectElement, options) {
        selectElement.innerHTML = "";

        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.text = opt.text;
            selectElement.appendChild(option);
        });
    }

    const regionSelect = document.querySelector('#underbotitem1 .underbotinputlist');
    const typeSelect = document.querySelector('#underbotitem2 .underbotinputlist');
    const destinationSelect = document.querySelector('#underbotitem3 .underbotinputlist');
    const timeSelect = document.querySelector('#underbotitem4 .underbotinputlist');
    const costSelect = document.querySelector('#underbotitem5 .underbotinputlist');

    updateSelectOptions(regionSelect, regionOptions);
    updateSelectOptions(typeSelect, typeOptions);
    updateSelectOptions(destinationSelect, destinationOptions);
    updateSelectOptions(timeSelect, timeOptions);
    updateSelectOptions(costSelect, costOptions);

    document.getElementById("underbotsearch").addEventListener("click", () => {
        const selectedRegion = regionSelect.value;
        const selectedType = typeSelect.value;
        const selectedDestination = destinationSelect.value;
        const selectedTime = timeSelect.value;
        const selectedCost = costSelect.value;

        const searchParams = `?region=${selectedRegion}&type=${selectedType}&destination=${selectedDestination}&time=${selectedTime}&cost=${selectedCost}`;
        console.log("Searching with parameters:", searchParams);

        window.location.href = `search.html${searchParams}`;
    });
});
