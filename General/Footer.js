window.onload = function () {
    var footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="footcontent">
                <div class="footcontent1">
                    <p>FLARISTA</p>
                    <p>Discover Vietnam with exclusive deals and exceptional service.</p>
                </div>
                <div class="footcontent2">
                    <p>TOP DESTINATIONS</p>
                    <div class="dong">
                        <img src="co-do-hue.png" alt="Cố Đô Huế">
                        <img src="cho-noi.png" alt="Chợ Nội">
                        <img src="hoi-an.png" alt="Hội An">
                    </div>
                    <div class="dong">
                        <img src="nha-tho-lon.png" alt="Nhà Thờ Lớn">
                        <img src="nen-4.png" alt="Nền 4">
                        <img src="beauty-unesco-heritage-site-ha-long-bay.png" alt="Vịnh Hạ Long">
                    </div>
                </div>
                <div class="footcontent3">
                    <p class="heading">CONTACT INFO</p>
                    <div class="text">
                        <p>Address: 21 Hoan Kiem Street - Ha Noi</p>
                        <p>Phone: +84 6868 888</p>
                        <p>Contact: FlaristaTravel@gmail.com</p>
                    </div>
                    <div class="icon">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-tiktok"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
        `;
    }
};
