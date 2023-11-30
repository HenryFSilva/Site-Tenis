const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/publico`))

app.get('/',function (req, res){
    res.sendFile(`${__dirname}/publico/HTML/Home.html`)
})

app.get('/Cadastro',function (req, res){
    res.sendFile(`${__dirname}/publico/HTML/Cadastro.html`)
})

app.get('/Contato',function (req, res){
    res.sendFile(`${__dirname}/publico/HTML/Contato.html`)
})

app.use(function (req, res){
    res.status(404).sendFile(`${__dirname}/publico/HTML/404.html`)
    })


app.listen(8000,() => {
    console.log('Servidor rodando na porta 8000');
})