document.addEventListener('DOMContentLoaded', () => {
    if (document.title === 'Dashboard - User Password Manager') {
        loadPasswords();
    }
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard';
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });
}

function toggleAddPassword() {
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = formContainer.style.display === 'none' ? 'flex' : 'none';
}

function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}

function loadPasswords() {
    fetch('/passwords')
        .then(response => response.json())
        .then(data => {
            const passwordList = document.getElementById('passwordList');
            passwordList.innerHTML = '';
            data.forEach((item, index) => {
                const passwordItem = document.createElement('div');
                passwordItem.classList.add('password-item');
                passwordItem.innerHTML = `
                    <span><strong>Sitio:</strong> ${sanitizeInput(item.site)}</span>
                    <span><strong>Usuario:</strong> ${sanitizeInput(item.username)}</span>
                    <span><strong>Contraseña:</strong> ${sanitizeInput(item.password)}</span>
                    <button onclick="deletePassword(${index})">Eliminar</button>
                `;
                passwordList.appendChild(passwordItem);
            });
        });
}

function addPassword() {
    const site = sanitizeInput(document.getElementById('site').value);
    const username = sanitizeInput(document.getElementById('username').value);
    const password = sanitizeInput(document.getElementById('password').value);
    if (site && username && password) {
        fetch('/passwords', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ site, username, password })
        })
        .then(() => {
            loadPasswords();
            document.getElementById('site').value = '';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('formContainer').style.display = 'none';
        });
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function deletePassword(index) {
    fetch(`/passwords/${index}`, {
        method: 'DELETE'
    })
    .then(() => {
        loadPasswords();
    });
}
