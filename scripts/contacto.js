const validUsers = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma normal

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = validUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // Si las credenciales son correctas, muestra la tabla
        document.getElementById("contactTableSection").style.display = "block";
        alert(`Bienvenido, ${user.username}!`);
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Ejemplo de código para almacenar datos de contacto (similar al anterior)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const empresa = document.getElementById("empresa").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const comentario = document.getElementById("comentario").value;

    const table = document.getElementById("contactTable").querySelector("tbody");
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = nombre;
    newRow.insertCell(1).textContent = telefono;
    newRow.insertCell(2).textContent = empresa;
    newRow.insertCell(3).textContent = email;
    newRow.insertCell(4).textContent = asunto;
    newRow.insertCell(5).textContent = comentario;

    this.reset();
});
