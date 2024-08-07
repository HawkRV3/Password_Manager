const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Datos en memoria
let passwords = [];
const correctUsername = 'admin';
const correctPassword = 'admin';

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === correctUsername && password === correctPassword) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/passwords', (req, res) => {
    res.json(passwords);
});

app.post('/passwords', (req, res) => {
    passwords.push(req.body);
    res.sendStatus(200);
});

app.delete('/passwords/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < passwords.length) {
        passwords.splice(index, 1);
    }
    res.sendStatus(200);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
