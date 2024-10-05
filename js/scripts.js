document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const asideLinks = document.querySelectorAll('.aside-link');
    const mainContent = document.getElementById('main-content');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    if (asideLinks.length > 0 && mainContent) {
        asideLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const content = this.getAttribute('data-content');
                mainContent.innerHTML = `
                    <article>
                        <header>${this.textContent}</header>
                        <p>${content}</p>
                    </article>
                `;
            });
        });
    }

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider img');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    if (slides.length > 0) {
        showSlide(currentIndex);
        setInterval(nextSlide, 3000);
    }

    const productosBtn = document.getElementById('productos-btn');
    if (productosBtn) {
        productosBtn.onclick = function () {
            document.getElementById('content-frame').src = 'pages/slider.html';
        };
    }

    const inicioBtn = document.getElementById('inicio-btn');
    if (inicioBtn) {
        inicioBtn.onclick = function () {
            document.getElementById('content-frame').src = 'pages/main_default.html';
        };
    }

    const iframe = document.querySelector('iframe[name="content-frame"]');

    iframe.onload = function () {
        const body = iframe.contentWindow.document.body;
        iframe.style.height = body.scrollHeight + 'px'; // Ajusta la altura al contenido
    };


});
