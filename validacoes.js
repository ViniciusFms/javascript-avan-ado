function validarSenha(senha) {

    if (!senha) {
        return null;
    }

    if (senha.length >= 6) {
        return true;
    } else {
        return false;
    }
}

module.exports = { validarSenha };