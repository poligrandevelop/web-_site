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

// funciones para botones de accion


document.addEventListener("DOMContentLoaded", function () {
    const buttonDiv = document.querySelector('.div_buttom');
    
    
    // Volver a la página principal por defecto
    document.getElementById("backToDefault").addEventListener("click", function () {
        document.querySelector("iframe[name='content-frame']").src = "pages/main_default.html";
    });

    // Mostrar botón de desplazamiento hacia arriba
    const button = document.getElementById("scrollToTop");
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    // Desplazar hacia arriba
    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Verificar superposición
    function checkOverlap() {
        const rect = buttonDiv.getBoundingClientRect();
        const aside = document.querySelector('aside'); // Selecciona el elemento aside

        // Verifica si el aside está visible y en la posición superior de los botones
        const asideRect = aside.getBoundingClientRect();
        const isOverlapped = (
            asideRect.bottom > rect.top && 
            asideRect.top < rect.bottom &&
            asideRect.right > rect.left &&
            asideRect.left < rect.right
        );

        buttonDiv.style.opacity = isOverlapped ? 0.5 : 1; // Ajustar la opacidad
    }

    // Detectar el desplazamiento y el redimensionamiento de la ventana
    window.addEventListener('scroll', checkOverlap);
    window.addEventListener('resize', checkOverlap);
    checkOverlap(); // Llamar a la función al cargar

    

});

