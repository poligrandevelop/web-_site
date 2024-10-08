document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Comprobar si el usuario ya existe
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario
    const user = users.find(u => u.username === username);

    if (user) {
        // Usuario existe, verificar la contraseña
        if (user.password === password) {
            // Iniciar sesión
            sessionStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'index.html'; // Redirigir a la página principal
        } else {
            document.getElementById('message').textContent = 'Contraseña incorrecta.';
        }
    } else {
        // Usuario no existe, crear uno nuevo
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('user', JSON.stringify(newUser));
        window.location.href = 'index.html'; // Redirigir a la página principal
    }
});
