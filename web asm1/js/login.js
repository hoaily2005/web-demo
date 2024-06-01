
        // Xử lý Đăng Nhập
        function xuLyDangNhap(event) {
            event.preventDefault();

            // Lấy dữ liệu người dùng nhập
            let username = document.getElementById("exampleInputUsername").value;
            let password = document.getElementById("exampleInputPassword").value;

            // Reset lỗi
            document.getElementById("username-error").innerText = "";
            document.getElementById("password-error").innerText = "";

            // Kiểm tra nếu chưa nhập username hoặc mật khẩu
            if (username.trim() === "") {
                document.getElementById("username-error").innerText = "Please enter your username.";
            }
            if (password.trim() === "") {
                document.getElementById("password-error").innerText = "Please enter your password.";
            }
            if (username.trim() === "" || password.trim() === "") {
                return;
            }

            // Kiểm tra trong localStorage
            const userData = JSON.parse(localStorage.getItem("userData"));
            if (userData) {
                if (userData.username === username && userData.password === password) {
                    alert("Login successful!");
                    // Lưu thông tin đăng nhập nếu người dùng chọn "Remember Me"
                    if (document.getElementById("customCheck").checked) {
                        localStorage.setItem("savedUser", JSON.stringify({ username: username, password: password }));
                    } else {
                        localStorage.removeItem("savedUser");
                    }
                    // Chuyển hướng người dùng đến trang chính sau khi đăng nhập thành công
                    location.href = "index.html";
                } else {
                    alert("Incorrect username or password!");
                }
            } else {
                alert("Account does not exist.");
            }
        }

        // Load thông tin người dùng đã lưu nếu đã chọn "Remember Me"
        window.onload = function () {
            const savedUser = JSON.parse(localStorage.getItem("savedUser"));
            if (savedUser) {
                document.getElementById("exampleInputUsername").value = savedUser.username;
                document.getElementById("exampleInputPassword").value = savedUser.password;
                document.getElementById("customCheck").checked = true;
            }
        };