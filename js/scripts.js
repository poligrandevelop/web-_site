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

    document.getElementById('productos-btn').onclick = function() {
        document.getElementById('content-frame').src = 'pages/slider.html'; // Ajusta la ruta al slider
    };

    document.getElementById('inicio-btn').onclick = function() {
        document.getElementById('content-frame').src = 'pages/main_default.html'; // Ruta a la información inicial
    };
});
