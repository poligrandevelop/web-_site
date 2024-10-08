document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (user) {
        document.getElementById('welcome').textContent = `Bienvenido, ${user.username}!`;
    } else {
        window.location.href = 'intranet.html'; // Redirigir a la página de inicio de sesión si no hay sesión
    }

    document.getElementById('logout').addEventListener('click', function () {
        sessionStorage.removeItem('user'); // Eliminar la sesión
        window.location.href = 'intranet.html'; // Redirigir a la página de inicio de sesión
    });
});
