const { somar } = require('./formulas.js');

describe('Testes para funções aritméticas', () => {

    it('testando resultado correto ao somar 2 números', () => {

        expect(somar(2, 2)).toBe(4);

    });

    it('testando resultado incorreto ao somar 2 números', () => {

        expect(somar(1, 2)).not.toBe(4);

    });

});