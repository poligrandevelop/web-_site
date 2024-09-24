document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backToDefault").addEventListener("click", function () {
        document.querySelector("iframe[name='content-frame']").src = "pages/main_default.html";
    });
});

window.addEventListener("scroll", function () {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});