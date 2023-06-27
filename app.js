const Express = require('express');
const app = Express();
const PORT = 3000;
const routes = require('./routes/tab');
const connection = require('./db/connection');
const bodyParser = require('body-parser');
const contas = require('./models/models');

//INICIANDO APP
app.listen(PORT, ()=>{
    console.log('Express rodando na porta '+ PORT)
});

//USANDO O BODY PARSER
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//ROTA DE TESTE
app.get('/', (req,res) =>{
    res.send('Teste de rota ok')
});

//VALIDANDO CONEXÃO COM BANCO

connection
    .authenticate()
    .then(()=> {
        console.log('Banco conectado com sucesso');
    })
    .catch(err =>{
        console.log('erro ao conectar ao banco ',err)
    });


//CAMINHO DAS ROTAS
app.use('/routes', routes);
