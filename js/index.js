document.addEventListener("DOMContentLoaded", function () {
    // Referencias a elementos del DOM
    const iframe = document.querySelector('iframe[name="content-frame"]');
    const buttonDiv = document.querySelector('.div_buttom');
    const aside = document.querySelector('aside');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const asideLinks = document.querySelectorAll('.aside-link');
    const mainContent = document.getElementById('main-content');
    const productosBtn = document.getElementById('productos-btn');
    const backToDefaultButton = document.getElementById("backToDefault");
    const scrollToTopButton = document.getElementById("scrollToTop");
    const slides = document.querySelectorAll('.slider img');

    // Ajustar altura del iframe según el contenido
    if (iframe) {
        iframe.onload = function () {
            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        };
    }

    // Botón para volver a la página por defecto
    if (backToDefaultButton) {
        backToDefaultButton.onclick = function () {
            document.querySelector('iframe[name="main-frame"]').src = '../pages/main_default.html';
        };
    }

    // Mostrar u ocultar el botón de desplazamiento hacia arriba
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Verificar superposición del botón con el aside
    function checkOverlap() {
        if (buttonDiv && aside) {
            const rect = buttonDiv.getBoundingClientRect();
            const asideRect = aside.getBoundingClientRect();
            const isOverlapped = (
                asideRect.bottom > rect.top &&
                asideRect.top < rect.bottom &&
                asideRect.right > rect.left &&
                asideRect.left < rect.right
            );
            buttonDiv.style.opacity = isOverlapped ? 0.5 : 1;
        }
    }

    window.addEventListener('resize', checkOverlap);
    checkOverlap(); // Llamar a la función al cargar

    // Menú hamburguesa
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isExpanded = nav.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Manejo de los enlaces del aside
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

    // Capturar el clic en los enlaces del menú de servicios
    document.querySelectorAll('.service-link').forEach(function (link) {
        link.addEventListener('click', function () {
            const offcanvasElement = document.getElementById('offcanvasAside');
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvas.hide();
        });
    });

    // Slider de imágenes
    let currentIndex = 0;
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

    // Botones de navegación
    if (productosBtn) {
        productosBtn.onclick = function () {
            const contentFrame = document.getElementById('content-frame');
            if (contentFrame) {
                contentFrame.src = 'pages/slider.html';
            }
        };
    }
});
