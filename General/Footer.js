// loadFooter.js
function loadFooter() {
    const footerHTML = `
        <style>
            footer {
                width: 100%;
                height: 50vh;
                background-color: #161618;
            }
            footer .content {
                width: 85%;
                height: 100%;
                margin-left: auto;
                margin-right: auto;
                display: flex;
                justify-content: space-between;
            }
            footer .content .content1 {
                margin-top: 2rem;
                width: calc(100% / 3);
            }
            footer .content .content1 p:nth-child(1) {
                color: white;
                font-weight: 700;
            }
            footer .content .content1 p:nth-last-child(1) {
                color: white;
                opacity: 0.7;
                font-size: larger;
                margin-top: 2rem;
            }
            footer .content .content2 {
                margin-top: 2rem;
                width: calc(100% / 3);
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            footer .content .content2 p {
                color: white;
                font-weight: 700;
                margin-bottom: 2rem;
            }
            footer .content .content2 .dong {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            footer .content .content2 img {
                width: 100%;
                max-width: 5rem;
                height: auto;
                margin: 0.3rem;
            }
            footer .content .content3 {
                margin-top: 2rem;
                width: calc(100% / 3);
                display: flex;
                flex-direction: column;
            }
            footer .content .content3 .text p {
                font-size: larger;
                color: white;
                opacity: 0.7;
                margin: 0.3rem;
            }
            footer .content .content3 .heading {
                color: white;
                font-weight: 700;
                margin-bottom: 2rem;
            }
            footer .content .content3 .icon i {
                margin-top: 3rem;
                color: white;
                font-size: x-large;
            }
        </style>
        <footer>
            <div class="content">
                <div class="content1">
                    <p>FLARISTA</p>
                    <p>Discover Vietnam with exclusive deals and exceptional service.</p>
                </div>
                <div class="content2">
                    <p>TOP DESTINATIONS</p>
                    <div class="dong">
                        <img src="cố đô huế.png" alt="Cố Đô Huế">
                        <img src="cho noi.png" alt="Chợ Nội">
                        <img src="hoi an.png" alt="Hội An">
                    </div>
                    <div class="dong">
                        <img src="nha tho lon.png" alt="Nhà Thờ Lớn">
                        <img src="nền 4.png" alt="Nền 4">
                        <img src="beauty-unesco-heritage-site-ha-long-bay.png" alt="Vịnh Hạ Long">
                    </div>
                </div>
                <div class="content3">
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
        </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Gọi hàm để tải footer khi trang được tải
window.onload = loadFooter;

