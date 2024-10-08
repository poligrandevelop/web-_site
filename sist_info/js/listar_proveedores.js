document.getElementById('loadProviders').addEventListener('click', function () {
    // Obtener los proveedores del localStorage
    const providers = JSON.parse(localStorage.getItem('providers')) || [];

    // Obtener el cuerpo de la tabla
    const tableBody = document.querySelector('#providersTable tbody');
    tableBody.innerHTML = ''; // Limpiar la tabla

    // Verificar si hay proveedores
    if (providers.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4">No hay proveedores registrados.</td></tr>';
        return;
    }

    // Llenar la tabla con los proveedores
    providers.forEach((provider, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${provider.name}</td>
            <td>${provider.email}</td>
            <td>${provider.phone}</td>
        `;
        tableBody.appendChild(row);
    });
});
