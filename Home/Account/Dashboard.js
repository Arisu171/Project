function loadHomeContent() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../Home/Home.html", true); // Đường dẫn tương đối từ Dashboard.html
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = xhr.responseText;

            var homeContent = tempDiv.querySelector('body');

            if (homeContent) {
                // Chèn nội dung từ Home.html vào vị trí id="body" của Dashboard.html
                document.getElementById('body').innerHTML = homeContent.innerHTML;
            }

            // Thêm các tệp CSS và JS từ Home
            addHomeResources();
        }
    };
    xhr.send();
}

function addHomeResources() {
    // Thêm CSS
    addCSS("../Home/tesst.css");
    addCSS("../Home/Banner.css");

    // Thêm JavaScript
    addScript("../Home/tesst.js");
    addScript("../Home/Banner.js");
}

function addCSS(file) {
    if (!document.querySelector(`link[href="${file}"]`)) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        document.head.appendChild(link);
    }
}

function addScript(file) {
    if (!document.querySelector(`script[src="${file}"]`)) {
        var script = document.createElement('script');
        script.src = file;
        document.body.appendChild(script);
    }
}

window.addEventListener("load", function () {
    loadHomeContent();
});
