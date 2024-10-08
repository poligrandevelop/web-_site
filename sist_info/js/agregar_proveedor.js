document.addEventListener('DOMContentLoaded', function () {
    // Agregar el evento al formulario
    const form = document.getElementById('providerForm');
    
    if (form) { // Asegúrate de que el formulario existe
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

            // Obtener los datos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Crear un nuevo proveedor
            const newProvider = { name, email, phone };

            // Obtener los proveedores existentes
            let providers = JSON.parse(localStorage.getItem('providers')) || [];

            // Agregar el nuevo proveedor
            providers.push(newProvider);
            localStorage.setItem('providers', JSON.stringify(providers));

            // Limpiar el formulario
            form.reset();

            alert('Proveedor agregado correctamente!');
        });
    } else {
        console.error("Formulario no encontrado");
    }
});
