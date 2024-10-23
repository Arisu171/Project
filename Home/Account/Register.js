window.addEventListener("load", function () {
    const ngaySelect = document.getElementById('ngay');
    const thangSelect = document.getElementById('thang');
    const namSelect = document.getElementById('nam');

    for (let i = 1950; i <= new Date().getFullYear(); i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        namSelect.appendChild(option);
    }

    // Hàm kiểm tra năm nhuận
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Hàm trả về số ngày trong tháng của một năm cụ thể
    function getDaysInMonth(month, year) {
        if (month === 2) {
            return isLeapYear(year) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(month)) {
            return 30;
        } else {
            return 31;
        }
    }

    // Khởi tạo danh sách ngày từ 1 đến 31
    function initializeDays() {
        ngaySelect.innerHTML = '<option value="" disabled selected>Day</option>';
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            ngaySelect.appendChild(option);
        }
    }

    // Hàm cập nhật số ngày theo tháng và năm, nếu cần thiết
    function updateDays() {
        const month = parseInt(thangSelect.value);
        const year = parseInt(namSelect.value);
        if (isNaN(month) || isNaN(year)) {
            return;
        }

        const currentDay = parseInt(ngaySelect.value);
        const daysInMonth = getDaysInMonth(month, year);

        if (currentDay > daysInMonth) {
            initializeDays();
        } else if (ngaySelect.options.length - 1 !== daysInMonth) {
            ngaySelect.innerHTML = '<option value="" disabled selected>Day</option>';
            for (let i = 1; i <= daysInMonth; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = i;
                ngaySelect.appendChild(option);
            }
            if (currentDay) {
                ngaySelect.value = currentDay;
            }
        }
    }

    initializeDays(); // Khởi tạo danh sách ngày ban đầu

    thangSelect.addEventListener('change', updateDays);
    namSelect.addEventListener('change', updateDays);
});



function validateField(fieldId, errorId, condition, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);

    if (condition) {
        errorElement.style.display = 'none';
    } else {
        errorElement.innerText = errorMessage;
        errorElement.style.display = 'block';
    }
}

document.getElementById("reginput1").addEventListener("input", function () {
    validateField("reginput1", "error-username", this.value.trim() !== "", "Username cannot be empty.");
});

document.getElementById("reginput2").addEventListener("input", function () {
    validateField("reginput2", "error-password", this.value.trim() !== "", "Password cannot be empty.");
});

document.getElementById("reginput3").addEventListener("input", function () {
    const password = document.getElementById("reginput2").value.trim();
    const confirmPassword = this.value.trim();
    validateField("reginput3", "error-confirm", password === confirmPassword, "Password and Confirm Password do not match.");
});

document.getElementById("reginput4").addEventListener("input", function () {
    validateField("reginput4", "error-firstname", this.value.trim() !== "", "First Name cannot be empty.");
});

document.getElementById("reginput5").addEventListener("input", function () {
    validateField("reginput5", "error-lastname", this.value.trim() !== "", "Last Name cannot be empty.");
});

document.getElementById("reginput7").addEventListener("input", function () {
    const isValidPhone = /^\d{10}$/.test(this.value.trim());
    validateField("reginput7", "error-phone", isValidPhone, "Phone must be 10 digits.");
});

document.getElementById("reginput8").addEventListener("input", function () {
    const isValidEmail = /^\S+@\S+\.\S+$/.test(this.value.trim());
    validateField("reginput8", "error-email", isValidEmail, "Invalid email format.");
});

document.getElementById("reginput9").addEventListener("input", function () {
    validateField("reginput9", "error-country", this.value.trim() !== "", "Country cannot be empty.");
});

document.getElementById("signupBtn").addEventListener("click", function (event) {
    event.preventDefault();

    const username = document.getElementById("reginput1").value.trim();
    const password = document.getElementById("reginput2").value.trim();
    const confirmPassword = document.getElementById("reginput3").value.trim();
    const firstName = document.getElementById("reginput4").value.trim();
    const lastName = document.getElementById("reginput5").value.trim();
    const phone = document.getElementById("reginput7").value.trim();
    const email = document.getElementById("reginput8").value.trim();
    const month = document.getElementById("thang").value;
    const day = document.getElementById("ngay").value;
    const year = document.getElementById("nam").value;
    const country = document.getElementById("reginput9").value.trim();

    let isValid = true;

    if (!username) {
        isValid = false;
        document.getElementById("error-username").innerText = "Username cannot be empty.";
        document.getElementById("error-username").style.display = "block";
    }
    if (!password) {
        isValid = false;
        document.getElementById("error-password").innerText = "Password cannot be empty.";
        document.getElementById("error-password").style.display = "block";
    }
    if (!confirmPassword) {
        isValid = false;
        document.getElementById("error-confirm").innerText = "Confirm Password cannot be empty.";
        document.getElementById("error-confirm").style.display = "block";
    }
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById("error-confirm").innerText = "Password and Confirm Password do not match.";
        document.getElementById("error-confirm").style.display = "block";
    }
    if (!firstName) {
        isValid = false;
        document.getElementById("error-firstname").innerText = "First Name cannot be empty.";
        document.getElementById("error-firstname").style.display = "block";
    }
    if (!lastName) {
        isValid = false;
        document.getElementById("error-lastname").innerText = "Last Name cannot be empty.";
        document.getElementById("error-lastname").style.display = "block";
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
        isValid = false;
        document.getElementById("error-phone").innerText = "Phone must be 10 digits.";
        document.getElementById("error-phone").style.display = "block";
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        isValid = false;
        document.getElementById("error-email").innerText = "Invalid email format.";
        document.getElementById("error-email").style.display = "block";
    }
    if (!month || !day || !year) {
        isValid = false;
        document.getElementById("error-birthdate").innerText = "Birth Date cannot be empty.";
        document.getElementById("error-birthdate").style.display = "block";
    }
    if (!country) {
        isValid = false;
        document.getElementById("error-country").innerText = "Country cannot be empty.";
        document.getElementById("error-country").style.display = "block";
    }

    if (isValid) {
        alert("Registration successful!");
    }
});
