
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");
  var toggleFormLink = document.getElementById("toggle-form");

  // Chuyển đổi giữa form đăng nhập và form đăng kí
  toggleFormLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.toggle("show");
    registerForm.classList.toggle("show");
  });

  // Xử lý khi người dùng submit form đăng nhập
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // Kiểm tra đăng nhập
    if (checkLogin(username, password)) {
      // Lưu thông tin đăng nhập thành công vào localStorage
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("username", username);

      // Chuyển hướng đến trang index.html
      window.location.href = "../She's/index.html";
    } else {
      // Hiển thị thông báo lỗi đăng nhập
      var loginError = document.getElementById("login-error");
      loginError.textContent = "Thông tin đăng nhập không chính xác.";
    }
  });

  // Xử lý khi người dùng submit form đăng ký
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("register-username").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    var confirmPassword = document.getElementById("register-confirm-password").value;

    // Kiểm tra đăng ký
    if (checkRegistration(username, email, password, confirmPassword)) {
      // Lưu thông tin đăng ký thành công vào localStorage
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("username", username);

      // Chuyển hướng đến trang index.html
      window.location.href = "../She's/index.html";
    } else {
      // Hiển thị thông báo lỗi đăng ký
      var registerError = document.getElementById("register-error");
      registerError.textContent = "Thông tin đăng ký không hợp lệ.";
    }
  });

  // Hàm kiểm tra đăng nhập
  function checkLogin(username, password) {
    // Thực hiện kiểm tra đăng nhập ở đây
    // Ví dụ: kiểm tra thông tin trong localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      return true; // Đăng nhập thành công
    } else {
      return false; // Đăng nhập thất bại
    }
  }

  // Hàm kiểm tra đăng ký
  function checkRegistration(username, email, password, confirmPassword) {
    // Thực hiện kiểm tra đăng ký ở đây
    // Ví dụ: kiểm tra các ràng buộc dữ liệu

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp nhau không
    if (password !== confirmPassword) {
      return false; // Đăng ký thất bại
    }

    // L// Lưu thông tin đăng ký vào localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    return true; // Đăng ký thành công
  }

  // Kiểm tra xem người dùng đã đăng nhập chưa
  function checkLoggedIn() {
    var loggedIn = localStorage.getItem("loggedIn");
    return loggedIn === "true"; // Trả về true nếu đã đăng nhập, ngược lại trả về false
  }

  // Kiểm tra xem người dùng đã đăng nhập chưa
  function getUsername() {
    return localStorage.getItem("username");
  }

  // Kiểm tra xem người dùng đã đăng nhập chưa và chuyển hướng tới trang index.html
  function redirectToHomepage() {
    if (checkLoggedIn()) {
      window.location.href = "../She's/index.html";
    }
  }

  // Kiểm tra trạng thái đăng nhập và chuyển hướng tới trang index.html nếu đã đăng nhập
  redirectToHomepage();

 
 