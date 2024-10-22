
/*slide ảnh region */
const images = document.querySelectorAll(".img-show img");
function move() {
    let tempSrc = images[0].src;
    let tempAlt = images[0].alt;
    let i;
    for (i = 0; i < images.length - 1; i++) {
        images[i].src = images[i + 1].src;
        images[i].alt = images[i + 1].alt;
    }
    images[images.length - 1].src = tempSrc;
    images[images.length - 1].alt = tempAlt;
}