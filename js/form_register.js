document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.querySelector(".registro-form");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Obtener los valores de los campos del formulario
        const nombre = document.querySelector("#nombre").value;
        const producto = document.querySelector("#producto").value;
        const telefono = document.querySelector("#telefono").value;
        const email = document.querySelector("#email").value;
        const direccion = document.querySelector("#direccion").value;
        const website = document.querySelector("#website").value;

        // Crear un objeto con los datos del proveedor
        const proveedorData = {
            nombre: nombre,
            producto: producto,
            telefono: telefono,
            email: email,
            direccion: direccion,
            website: website
        };

        // Guardar los datos en Local Storage
        localStorage.setItem("registroProveedor", JSON.stringify(proveedorData));

        // Opcional: Mostrar una alerta o mensaje de confirmación
        alert("Registro guardado exitosamente en Local Storage.");

        // Reiniciar el formulario después de guardar los datos
        registroForm.reset();
    });
    const proveedorGuardado = JSON.parse(localStorage.getItem("registroProveedor"));
    if (proveedorGuardado) {
        console.log(proveedorGuardado);
    }

});
