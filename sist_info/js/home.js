document.addEventListener('DOMContentLoaded', function () {
    const userInfo = document.getElementById('userInfo');
    const logoutButton = document.getElementById('logoutButton');

    // Verificar si hay un usuario en sesión
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
        userInfo.innerHTML = `<p>Usuario: ${currentUser.username}</p><p>Rol: ${currentUser.role}</p>`;
    } else {
        alert('No has iniciado sesión. Redirigiendo a la página de inicio de sesión.');
        window.location.href = 'intranet.html'; // Cambia esto a tu página de inicio de sesión
    }

    logoutButton.addEventListener('click', function () {
        // Cerrar sesión
        sessionStorage.removeItem('currentUser');
        alert('Has cerrado sesión.');
        window.location.href = 'intranet.html'; // Redirigir al formulario de inicio de sesión
    });
});
