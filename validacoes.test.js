const { validarSenha } = require('./validacoes.js');


it('testando se a senha possui no mínimo 6 caracteres', ()=>{

    const senha = 'guilherme';

    expect(validarSenha(senha)).toBeTruthy();

});

