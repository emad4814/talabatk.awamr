document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("authOverlay");
    const boxes = document.querySelectorAll(".auth-box");
    const loginBtn = document.getElementById("loginBtn");

    // فتح البوب اب
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.classList.add("active");
    });

    // إغلاق عند الضغط خارج الفورم
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    });

    // التنقل بين Login / Signup / Forgot
    document.querySelectorAll("[data-switch]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            boxes.forEach(box => box.classList.remove("is-active"));

            const target = link.dataset.switch;
            document
                .getElementById("auth-" + target)
                .classList.add("is-active");
        });
    });

});
