const crypto = require('crypto');

// Función para generar un hash de una contraseña
function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}

// Función para comparar una contraseña con un hash
function comparePassword(password, hash) {
    return hashPassword(password) === hash;
}

module.exports = {
    hashPassword,
    comparePassword
};
