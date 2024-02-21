const express = require('express');

const api = express();
api.use(express.json());

const HOST = 'localhost';
const PORT = '7000';

const listaAlunas = [
    {
        codigo: 1,
        nome: 'Hermione',
        turma: 'noite'
    },
    {
        codigo: 2,
        nome: 'Sakura',
        turma: 'tarde'
    },
    {
        codigo: 3,
        nome: 'Luna',
        turma: 'manhã'
    },
    {
        codigo: 4,
        nome: 'Joana Dark',
        turma: 'noite'
    },
    {
        codigo: 5,
        nome: 'Magalu',
        turma: 'manhã'
    }
];

api.listen(PORT, ()=>{
    console.log(`A aplicação está sendo executada em http://${HOST}:${PORT}`);
});

api.get('/', (request, response)=>{
    const endpoints = `
        *** Endpoints disponíveis para acessar ***

        (GET): /alunas - Retorna uma lista de alunas em forma de objeto
    `;
    response.status(200).send(endpoints);
});

api.get('/alunas', (request, response)=>{

    response.status(200).send(listaAlunas);

});

api.get('/alunas/:codigo', (request, response)=>{

    //const { codigo } = request.params;
    const codigo = request.params.codigo;

    // Percorrendo a lista de alunas e verificando se alguma delas
    // possui o código igual ao que está sendo passado na requisição
    const alunaEncontrada = listaAlunas.find((aluna)=>{
        return aluna.codigo == codigo;
    });

    // Testar se alguma aluna foi encontrada para o código enviado
    if (alunaEncontrada) {
        response.status(200).send(alunaEncontrada);
    } else {
        response.status(400).send(`Aluna não encontrada para o código ${codigo}`);
    }

});

api.get('/alunas/turma/:turma', (request, response)=>{

    const turma = request.params.turma;

    const alunasTurma = listaAlunas.filter((aluna)=>{
        return aluna.turma == turma;
    });

    if (alunasTurma.length > 0) {
        response.status(200).send(alunasTurma);
    } else {
        response.status(400).send(`Nenhuma aluna encontrada para a turma ${turma}`);
    }

});


api.post('/aluna', (request, response)=>{

    const aluna = request.body.aluna;

    if (aluna) {
        listaAlunas.push(aluna);
        response.status(201).send(listaAlunas);
    } else {
        response.status(400).send('Nenhuma aluna encontrada no corpo da Requisição!');
    }

});


api.put('/aluna/:codigo',(request, response)=>{

    const codigo = request.params.codigo;

    const alunaAtualizada = request.body.alunaAtualizada;

    const indexAluna = listaAlunas.findIndex((elemento)=>{
        return elemento.codigo == codigo;
    });

    listaAlunas.splice(indexAluna, 1, alunaAtualizada);

    response.status(200).send(listaAlunas);

});