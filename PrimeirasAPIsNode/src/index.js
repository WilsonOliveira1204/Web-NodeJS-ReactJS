const express = require('express');

const app = express();

app.use(express.json());

app.get('/dadospessoais', (req, res) => {
    res.send({Nome: 'Samuel Higor',
             Idade: '20 anos'
            }) 
        });

app.get('/formacao', (req, res) => {
    res.send({Educação: 'Ensino Superior Cursando',
             Cursos: 'Informática, Inglês e Gestão Empresarial'
            }) 
        });

app.get('/projetos', (req, res) => {
    res.send({'Projetos realizados': 'Sistema de Busca de Produtos'
             }) 
        });

app.get('/experiencia', (req, res) => {
    res.send({'Experiência em': 'Exército Brasileiro - Administração'
            }) 
        });

app.get('/lazer', (req, res) => {
    res.send({'Passa tempo': 'Jogar jogos online, atividades físicas, jogar bola, etc',
             }) 
        });



        app.post('/incluirCliente', (req, res) => {
            const {nome, idade, telefone, profissao, email} = req.body;
            res.send("Cliente " + nome + " cadastrado!");
        });

        app.delete('/excluirCliente/:id', (req, res) => {
            const {id} = req.params;
            res.send("Cliente " + id + " excluído!");
        });

        app.put =('/atualizarCliente/:id', (req, res) => {
            const {id} = req.params;
            res.send('Cliente' + id + 'encontrado');
         });

        app.get('/consultarCliente/:id', (req, res) =>{
            const {id} = req.params;
            
            res.send("Cliente " + id + " localizado!")
        });



app.listen(3333, () => {
    console.log("Servidor Backend ON!")
});